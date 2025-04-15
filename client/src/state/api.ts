import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import { Conducteur, Passager, Property } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";
import { result } from "lodash";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    }
  }),
  reducerPath: "api",
  tagTypes: ["Passagers", "Conducteurs", "Properties", "CovoiturageDetails"],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async(_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const {idToken} = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          const endpoint = 
            userRole === "conducteur" ?
              `/conducteurs/${user.userId}` : `/passagers/${user.userId}`;
          
          let userDetailsResponse = await fetchWithBQ(endpoint);

          // if user does not exist, create a new user
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            );
          }
          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as Passager | Conducteur,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      }
    }),

    // property related endpoints
    getProperties: build.query<
      Property[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          location: filters.location,
          propertyType: filters.propertyType,
          favoriteIds: filters.favoriteIds?.join(","),
          latitude: filters.coordinates?.[1],
          longitude: filters.coordinates?.[0],
        });

        return { url: "properties", params };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Properties" as const, id })),
              { type: "Properties", id: "LIST" },
            ]
          : [{ type: "Properties", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch properties.",
        });
      },
    }),

    getCovoiturage: build.query<Property, number> ({
      query: (id) => `properties/${id}`,
      providesTags: (result, error, id) => [{ type: "CovoiturageDetails", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load property details.",
        });
      },

    }),

    // Passager related endpoints
    getPassager: build.query<Passager, string>({
      query: (cognitoId) => `passagers/${cognitoId}`,
      providesTags: (result) => [{ type: "Passagers", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load passager profile.",
        });
      },
    }),

    // Add favorite property to passager
    addFavoriteProperty: build.mutation<
      Passager,
      { cognitoId: string; propertyId: number }
    >({
      query: ({ cognitoId, propertyId }) => ({
        url: `passagers/${cognitoId}/favorites/${propertyId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Passagers", id: result?.id },
        { type: "Properties", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Added to favorites!!",
          error: "Failed to add to favorites",
        });
      },
    }),

    // remove favorite property from passager
    removeFavoriteProperty: build.mutation<
      Passager,
      { cognitoId: string; propertyId: number }
    >({
      query: ({ cognitoId, propertyId }) => ({
        url: `passagers/${cognitoId}/favorites/${propertyId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Passagers", id: result?.id },
        { type: "Properties", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Removed from favorites!",
          error: "Failed to remove from favorites.",
        });
      },
    }),

    updatePassagerSettings: build.mutation<
      Passager,
      { cognitoId: string } & Partial<Passager>
    >({
      query: ({ cognitoId, ...updatedPassager }) => ({
        url: `passagers/${cognitoId}`,
        method: "PUT",
        body: updatedPassager,
      }),
      invalidatesTags: (result) => [{ type: "Passagers", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Settings updated successfully!",
          error: "Failed to update settings.",
        });
      },
    }),
    updateConducteurSettings: build.mutation<
      Conducteur,
      { cognitoId: string } & Partial<Conducteur>
    >({
      query: ({ cognitoId, ...updatedConducteur }) => ({
        url: `conducteurs/${cognitoId}`,
        method: "PUT",
        body: updatedConducteur,
      }),
      invalidatesTags: (result) => [{ type: "Conducteurs", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Settings updated successfully!",
          error: "Failed to update settings.",
        });
      },
    }),

  }),
});

export const {
  useGetAuthUserQuery,
  useUpdatePassagerSettingsMutation,
  useUpdateConducteurSettingsMutation,
  useGetPropertiesQuery,
  useGetPassagerQuery,
  useAddFavoritePropertyMutation,
  useRemoveFavoritePropertyMutation,
  useGetCovoiturageQuery,
} = api;

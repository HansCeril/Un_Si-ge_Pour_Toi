import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import { Application, Conducteur, Lease, Passager, Payment, Covoiturage } from "@/types/prismaTypes";
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
  tagTypes: [
    "Applications",
    "Passagers",
    "Conducteurs",
    "Covoiturages",
    "CovoiturageDetails",
    "Payments",
    "Leases"
  ],
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

    // Covoiturage related endpoints
    getCovoiturages: build.query<
      Covoiturage[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          location: filters.location,
          covoiturageType: filters.covoiturageType,
          favoriteIds: filters.favoriteIds?.join(","),
          latitude: filters.coordinates?.[1],
          longitude: filters.coordinates?.[0],
        });

        return { url: "covoiturages", params };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Covoiturages" as const, id })),
              { type: "Covoiturages", id: "LIST" },
            ]
          : [{ type: "Covoiturages", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch covoiturages.",
        });
      },
    }),

    getCovoiturage: build.query<Covoiturage, number> ({
      query: (id) => `covoiturages/${id}`,
      providesTags: (result, error, id) => [{ type: "CovoiturageDetails", id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load covoiturage details.",
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

    // Add favorite Covoiturage to passager
    addFavoriteCovoiturage: build.mutation<
      Passager,
      { cognitoId: string; covoiturageId: number }
    >({
      query: ({ cognitoId, covoiturageId }) => ({
        url: `passagers/${cognitoId}/favorites/${covoiturageId}`,
        method: "POST",
      }),
      invalidatesTags: (result) => [
        { type: "Passagers", id: result?.id },
        { type: "Covoiturages", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Added to favorites!!",
          error: "Failed to add to favorites",
        });
      },
    }),

    // remove favorite Covoiturage from passager
    removeFavoriteCovoiturage: build.mutation<
      Passager,
      { cognitoId: string; covoiturageId: number }
    >({
      query: ({ cognitoId, covoiturageId }) => ({
        url: `passagers/${cognitoId}/favorites/${covoiturageId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [
        { type: "Passagers", id: result?.id },
        { type: "Covoiturages", id: "LIST" },
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

    // lease related enpoints
    getLeases: build.query<Lease[], number>({
      query: () => "leases",
      providesTags: ["Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch leases.",
        });
      },
    }),

    getCovoiturageLeases: build.query<Lease[], number>({
      query: (covoiturageId) => `covoiturages/${covoiturageId}/leases`,
      providesTags: ["Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch covoiturage leases.",
        });
      },
    }),

    getPayments: build.query<Payment[], number>({
      query: (leaseId) => `leases/${leaseId}/payments`,
      providesTags: ["Payments"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch payment info.",
        });
      },
    }),
    
    getCurrentCovoiturage: build.query<Covoiturage[], string>({
      query: (cognitoId) => `passagers/${cognitoId}/current-course`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Covoiturages" as const, id })),
              { type: "Covoiturages", id: "LIST" },
            ]
          : [{ type: "Covoiturages", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch current residences.",
        });
      },
    }),

    // Conducteur related endpoints
    getConducteurCovoiturages: build.query<Covoiturage[], string>({
      query: (cognitoId) => `conducteurs/${cognitoId}/covoituragess`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Covoiturages" as const, id })),
              { type: "Covoiturages", id: "LIST" },
            ]
          : [{ type: "Covoiturages", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load conducteur profile.",
        });
      },
    }),

    createCovoiturage: build.mutation<Covoiturage, FormData>({
      query: (newCovoiturage) => ({
        url: `covoiturages`,
        method: "POST",
        body: newCovoiturage,
      }),
      invalidatesTags: (result) => [
        { type: "Covoiturages", id: "LIST" },
        { type: "Conducteurs", id: result?.conducteur?.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Covoiturage created successfully!",
          error: "Failed to create Covoiturage.",
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

    // application related endpoints
    getApplications: build.query<
      Application[],
      { userId?: string; userType?: string }
    >({
      query: (params) => {
        const queryParams = new URLSearchParams();
        console.log(params)
        if (params.userId) {
          queryParams.append("userId", params.userId.toString());
        }
        if (params.userType) {
          queryParams.append("userType", params.userType);
        }

        return `applications?${queryParams.toString()}`;
      },
      providesTags: ["Applications"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch applications.",
        });
      },
    }),

    updateApplicationStatus: build.mutation<
      Application & { lease?: Lease },
      { id: number; status: string }
    >({
      query: ({ id, status }) => ({
        url: `applications/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Applications", "Leases"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Application status updated successfully!",
          error: "Failed to update application settings.",
        });
      },
    }),

    createApplication: build.mutation<Application, Partial<Application>>({
      query: (body) => ({
        url: `applications`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Applications"],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Application created successfully!",
          error: "Failed to create applications.",
        });
      },
    })

  }),
});

export const {
  useGetAuthUserQuery,
  useUpdatePassagerSettingsMutation,
  useUpdateConducteurSettingsMutation,
  useGetCovoituragesQuery,
  useGetPassagerQuery,
  useAddFavoriteCovoiturageMutation,
  useRemoveFavoriteCovoiturageMutation,
  useGetCovoiturageQuery,
  useGetCurrentCovoiturageQuery,
  useGetLeasesQuery,
  useGetCovoiturageLeasesQuery,
  useGetPaymentsQuery,
  useGetConducteurCovoituragesQuery,
  useCreateCovoiturageMutation,
  useCreateApplicationMutation,
  useGetApplicationsQuery,
  useLazyGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
} = api;

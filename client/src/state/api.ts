import { createNewUserInDatabase, withToast } from "@/lib/utils";
import { Conducteur, Passager } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

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
  tagTypes: ["Passagers", "Conducteurs"],
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
} = api;

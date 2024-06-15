import { apiSlice } from "../../lib/api";

export const extendedSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userInfo) => ({
        url: "auth/register",
        method: "POST",
        body: userInfo,
      }),
      transformErrorResponse: (err) => {
        if (err?.data) {
          return { ...err.data };
        }
        return err;
      },
    }),
    currentUser: builder.query({
      query: () => ({
        url: "auth/current_user",
        method: "GET",
      }),
      providesTags: ["User"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        await queryFulfilled.then(({ data }) => {
          setTimeout(() => {
            return data;
          }, 500);
        });
      },
      transformErrorResponse: (err) => {
        if (err?.data) {
          return { ...err.data };
        }
        return err;
      },
    }),
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "auth/login",
        method: "POST",
        body: loginInfo,
      }),
      transformErrorResponse: (err) => {
        if (err?.data) {
          return { ...err.data };
        }
        return err;
      },
    }),
  }),
});
export const { useSignupMutation, useCurrentUserQuery, useLoginMutation } =
  extendedSlice;

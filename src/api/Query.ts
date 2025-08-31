import { type FetchArgs, createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store/store";
import { logOutUser } from "../features/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const staggeredBaseQueryWithBailOut = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(logOutUser());
    }

    return result;
  },
  {
    maxRetries: 0,
  }
);

export type Channel = "redux" | "general";

export const QueryApi = createApi({
  baseQuery: staggeredBaseQueryWithBailOut,
  reducerPath: "projectDelta",
  tagTypes: ["USERS"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "user/register",
        body,
        method: "POST",
      }),
      invalidatesTags: ["USERS"],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "user/login",
        body,
        method: "POST",
      }),
      invalidatesTags: ["USERS"],
    }),
    createWallet: builder.mutation({
      query: (body) => ({
        url: "wallets",
        body,
        method: "POST",
      }),
      invalidatesTags: ["USERS"],
    }),
    getWallet: builder.query({
      query: () => ({
        url: "wallets",
        method: "GET",
      }),
      providesTags: ["USERS"],
    }),
    deposit: builder.mutation({
      query: (body) => ({
        url: "wallets/deposit",
        body,
        method: "POST",
      }),
      invalidatesTags: ["USERS"],
    }),
    getBalances: builder.query({
      query: () => ({
        url: "wallets/balances",
        method: "GET",
      }),
      providesTags: ["USERS"],
    }),
    swap: builder.mutation({
      query: (body) => ({
        url: "wallets/swap",
        body,
        method: "POST",
      }),
      invalidatesTags: ["USERS"],
    }),
    getHistory: builder.query({
      query: () => ({
        url: "wallets/history",
        method: "GET",
      }),
      providesTags: ["USERS"],
    }),
  }),
});

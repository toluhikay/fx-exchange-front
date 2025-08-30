/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { QueryApi } from "../api/Query";

interface AdminDetails {
  userPayload: any;
  token: string | null;
}

const initialState = {
  userPayload: null,
  token: null,
} as AdminDetails;

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOutUser: (state) => {
      state.token = null;
      state.userPayload = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(QueryApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      console.log(payload, "logger");

      state.userPayload = payload;
      state.token = payload?.data?.access_token;
    });
  },
});

export const { logOutUser } = AuthSlice.actions;
export default AuthSlice.reducer;

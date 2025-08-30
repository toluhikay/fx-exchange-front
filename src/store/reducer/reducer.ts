import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../../features/authSlice";
import { QueryApi } from "../../api/Query";

export const rootReducer = combineReducers({
  auth: authSlice,
  [QueryApi.reducerPath]: QueryApi.reducer,
});

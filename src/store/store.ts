import { persistStore, persistReducer, FLUSH, REHYDRATE, REGISTER, PAUSE, PURGE, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage
import { rootReducer } from "./reducer/reducer"; // your combined reducers
import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { QueryApi } from "../api/Query";

const persistConfig = {
  key: "root",
  storage,
  debug: true,
  blacklist: [QueryApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production", // vite-specific
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(QueryApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

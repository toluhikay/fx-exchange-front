import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
              marginTop: "10px",
              zIndex: 9999999999,
            },

            // Default options for specific types
            success: {
              duration: 5000,
            },
          }}
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

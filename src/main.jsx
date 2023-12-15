import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoutes from "./router/MainRoutes.jsx";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={MainRoutes}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    <Toaster position="top-right" />
  </React.StrictMode>
);

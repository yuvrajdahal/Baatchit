import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./appstate/store.js";
import { Toaster } from "react-hot-toast";
import { ErrorBoundaryProvider } from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ErrorBoundaryProvider>
      <App />
    </ErrorBoundaryProvider>
    <Toaster position="top-right" />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthConextProvider from "./context/AuthConext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthConextProvider>
        <App />
      </AuthConextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

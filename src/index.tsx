import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { ContainerProvider } from "brandi-react";

import { oidcConfig } from "./config/oidc";
import { container } from "./config/container";
import "./assets/css/main.css";
import "./assets/css/vars.css";
import "./assets/css/elements.css";
import "./assets/css/formatting.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <ContainerProvider container={container}>
        <App />
      </ContainerProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

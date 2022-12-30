import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "react-oidc-context";
import { User } from "oidc-client-ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const onSigninCallback = (_user: User | void): void => {
     window.history.replaceState(
         {},
         document.title,
         window.location.pathname
     )
}

const oidcConfig = {
  //authority: process.env.REACT_APP_COGNITO_DOMAIN!,
  authority: process.env.REACT_APP_COGNITO_AUTHORITY!, // "https://cognito-idp.ca-central-1.amazonaws.com/ca-central-1_shXTZB8mT",
  client_id: process.env.REACT_APP_COGNITO_CLIENT_ID!,
  redirect_uri: `${window.location.protocol}//${window.location.host}/auth`,
  // authority: "https://dev-auth.triphoarder.com",
  // client_id: "5cifj4dmu775554abh7mmm5ppn",
  // redirect_uri: "http://localhost/auth"
  onSigninCallback: onSigninCallback
};

root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

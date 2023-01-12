import { User } from "oidc-client-ts";

const onSigninCallback = (_user: User | void): void => {
  window.location.replace("/");
};

export const oidcConfig = {
  authority: process.env.REACT_APP_COGNITO_AUTHORITY!,
  client_id: process.env.REACT_APP_COGNITO_CLIENT_ID!,
  redirect_uri: `${window.location.protocol}//${window.location.host}/auth`,
  onSigninCallback: onSigninCallback,
};

import { User } from "oidc-client-ts";

const onSigninCallback = (_user: User | void): void => {
  window.location.replace("/");
};

export const oidcConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY!,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID!,
  redirect_uri: `${window.location.protocol}//${window.location.host}/auth`,
  onSigninCallback: onSigninCallback,
};

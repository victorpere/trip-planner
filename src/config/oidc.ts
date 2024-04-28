import { User } from "oidc-client-ts";

const onSigninCallback = (_user: User | void): void => {
  window.location.replace("/");
};

export const oidcConfig = {
  authority: import.meta.env.REACT_APP_COGNITO_AUTHORITY!,
  client_id: import.meta.env.REACT_APP_COGNITO_CLIENT_ID!,
  redirect_uri: `${window.location.protocol}//${window.location.host}/auth`,
  onSigninCallback: onSigninCallback,
};

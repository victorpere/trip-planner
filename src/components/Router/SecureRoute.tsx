import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "react-oidc-context";

type Props = {
  path: string;
  element: JSX.Element;
};

const SecureRoute = (props: Props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return <Route path={props.path} element={props.element} />;
};

export default SecureRoute;

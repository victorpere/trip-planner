import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.activeNavigator && !auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect();
    }
  }, [auth]);

  return <Navigate replace to="/" />;
};

export default Signin;

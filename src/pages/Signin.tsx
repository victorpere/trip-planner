import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const Signin = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.activeNavigator && !auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect();
    }
  }, [auth]);

  return null;
};

export default Signin;

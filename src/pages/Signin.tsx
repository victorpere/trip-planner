import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const Signin = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      auth.signinRedirect();
    }
  }, [auth]);

  return null;
};

export default Signin;

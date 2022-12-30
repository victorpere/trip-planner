import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const Signout = () => {
  const auth = useAuth();

  useEffect(() => {
    auth.signoutRedirect();
  }, [auth]);

  return null;
};

export default Signout;

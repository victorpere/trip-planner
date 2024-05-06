import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const Signout = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.activeNavigator && !auth.isLoading && auth.isAuthenticated) {
      auth.removeUser();
      window.location.replace(`${import.meta.env.VITE_COGNITO_DOMAIN}/logout?client_id=${import.meta.env.VITE_COGNITO_CLIENT_ID}&logout_uri=${window.location.protocol}//${window.location.host}`);
    }
  }, [auth]);

  return null;
};

export default Signout;

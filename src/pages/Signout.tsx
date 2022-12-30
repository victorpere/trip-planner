import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const Signout = () => {
  const auth = useAuth();

  useEffect(() => {
    if (!auth.activeNavigator && !auth.isLoading && auth.isAuthenticated) {
      auth.removeUser();
      window.location.replace(`${process.env.REACT_APP_COGNITO_DOMAIN}/logout?client_id=${process.env.REACT_APP_COGNITO_CLIENT_ID}&logout_uri=${window.location.protocol}//${window.location.host}`);
    }
  }, [auth]);

  return null;
};

export default Signout;

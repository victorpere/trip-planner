import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const HeaderUser = () => {
  const auth = useAuth();

  if (auth.isLoading || auth.activeNavigator) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <div>{auth.user?.profile.given_name ?? auth.user?.profile.name ?? auth.user?.profile.email}</div>
        <div>
          <Link to="/signout">Sign out</Link>
        </div>
      </div>
    );
  }

  // return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  return (
    <div>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

export default HeaderUser;

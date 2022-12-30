import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const HeaderUser = () => {
  const auth = useAuth();

    console.log(auth);

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <div>{auth.user?.profile.name}</div>
        <Link to="/signout">SIGN OUT</Link>
      </div>
    );
  }

  // return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  return (
    <div>
      <Link to="/signin">SIGN IN</Link>
    </div>
  );
};

export default HeaderUser;

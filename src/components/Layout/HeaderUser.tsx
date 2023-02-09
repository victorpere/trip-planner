import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { useTranslation } from "react-i18next";

const HeaderUser = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  if (auth.isLoading || auth.activeNavigator) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <div>
          {auth.user?.profile.given_name ??
            auth.user?.profile.name ??
            auth.user?.profile.email}
        </div>
        <div>
          <Link to="/signout">{t("Sign out")}</Link>
        </div>
      </div>
    );
  }

  // return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  return (
    <div>
      <Link to="/signin">{t("Sign in")}</Link>
    </div>
  );
};

export default HeaderUser;

import React from "react";
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

type Props = {};

const Profile = (props: Props) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate replace to="/signin" />;
  }

  return (
    <>
      <div>User ID: {auth.user?.profile.sub}</div>
      <div>Name: {auth.user?.profile.name}</div>
      <div>Nickname: {auth.user?.profile.nickname}</div>
      <div>First name: {auth.user?.profile.given_name} </div>
      <div>Last name: {auth.user?.profile.family_name}</div>
      <div>Email: {auth.user?.profile.email}</div>
      <div>Locale: {auth.user?.profile.locale}</div>
    </>
  );
};

export default Profile;

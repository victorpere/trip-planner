import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: React.FC<{ showUser: boolean }> = ({ showUser }) => {
  return (
    <>
      <Header showUser={showUser} />
      <Outlet />
    </>
  );
};

export default Layout;

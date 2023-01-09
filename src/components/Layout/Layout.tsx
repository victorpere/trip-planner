import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./Layout.module.css";

const Layout: React.FC<{ showUser: boolean }> = ({ showUser }) => {
  return (
    <>
      <Header showUser={showUser} />
      <div className={styles["main-content"]}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

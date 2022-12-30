import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderUser from "./HeaderUser";

const Header: React.FC<{ showUser: boolean }> = ({ showUser }) => {
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["header-content"]}>
          <div
            className={`${styles["header-item"]} ${styles["header-item-left"]}`}
          >
            <h1>
              <Link to="/">TITLE</Link>
            </h1>
          </div>
          <div
            className={`${styles["header-item"]} ${styles["header-item-right"]}`}
          >
            {showUser && <HeaderUser />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;

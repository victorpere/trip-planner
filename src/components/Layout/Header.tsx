import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderUser from "./HeaderUser";

type Props = {
  showUser: boolean;
};

const Header = (props: Props) => {
  return (
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
          {props.showUser && <HeaderUser />}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import HeaderUser from "./HeaderUser";
import styles from "./Header.module.css";

type Props = {
  showUser: boolean;
};

const Header = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles["header"]}>
      <div className={styles["header-content"]}>
        <div
          className={`${styles["header-item"]} ${styles["header-item-left"]}`}
        >
          <h1>
            <Link to="/">{t("title")}</Link>
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

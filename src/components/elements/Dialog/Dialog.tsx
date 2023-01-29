import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import styles from "./Dialog.module.css";

type Props = {
  children: ReactElement;
};

const Dialog = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["dialog-screen"]}>
          <div className={`${styles["center"]} ${styles["dialog"]}`}>
            {props.children}
          </div>
        </div>,
        document.getElementById("dialog-root") as HTMLElement
      )}
    </>
  );
};

export default Dialog;

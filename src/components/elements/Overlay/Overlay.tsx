import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

import styles from "./Overlay.module.css";

type Props = {
  children: ReactElement;
  backgroundColor?: string;
};

const Overlay = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["dialog-screen"]}>
          <div className={`${styles["center"]} ${styles["dialog"]}`}  style={{backgroundColor: props.backgroundColor}}>
            {props.children}
          </div>
        </div>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Overlay;

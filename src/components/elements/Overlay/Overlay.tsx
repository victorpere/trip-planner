import React, { CSSProperties, ReactElement } from "react";
import ReactDOM from "react-dom";

import styles from "./Overlay.module.css";

type Props = {
  children: ReactElement;
  className?: string;
  style?: CSSProperties;
};

const Overlay = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles["dialog-screen"]}>
          <div className={`${styles["center"]} ${styles["dialog"]} ${props.className ?? ""}`} style={props.style}>
            {props.children}
          </div>
        </div>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </>
  );
};

export default Overlay;

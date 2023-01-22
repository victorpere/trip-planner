import React, { ReactNode } from "react";

import styles from "./HorizontalItemList.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const HorizontalItemList = (props: Props) => {
  return (
    <div className={`${styles["list"]} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default HorizontalItemList;

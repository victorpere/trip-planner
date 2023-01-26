import React from "react";

import styles from "./FlexItemList.module.css";

type Props = {
  children: JSX.Element[];
  className?: string;
};

const FlexItemList = (props: Props) => {
  return (
    <div className={`${styles["list"]} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default FlexItemList;

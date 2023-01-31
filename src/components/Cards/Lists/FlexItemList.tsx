import React from "react";

import styles from "./FlexItemList.module.css";

type Props = {
  children: JSX.Element[];
  className?: string;
};

const FlexItemList = (props: Props) => {
  return (
    <div className={`${styles["list"]} ${props.className ?? ""}`}>
      {props.children.map((child, index) => (
        <div key={index} className={styles["list-item"]}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlexItemList;

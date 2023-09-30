import React from "react";

import styles from "./FlexItemList.module.css";
import { ListProps } from "./props.type";

const FlexItemList = (props: ListProps) => {
  return (
    <div className={`${styles["list"]} ${props.className ?? ""}`}>
      {props.children.map((child, index) => (
        <div
          key={index}
          className={`${styles["list-item"]} ${props.childClassName ?? ""}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FlexItemList;

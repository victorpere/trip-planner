import React, { ReactNode } from "react";

import styles from "./FlexItemList.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  parentItemType?: string;
};

const FlexItemList = (props: Props) => {
  return (
    <div className={`${styles["list"]} ${props.className ?? ""}`}>
      {props.children}
    </div>
  );
};

export default FlexItemList;

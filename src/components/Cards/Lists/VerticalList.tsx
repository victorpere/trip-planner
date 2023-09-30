import React from "react";
import { ListProps } from "./props.type";

const VerticalList = (props: ListProps) => {
  return (
    <div className={props.className}>
      {props.children.map((child, index) => (
        <div key={index} className={props.childClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default VerticalList;

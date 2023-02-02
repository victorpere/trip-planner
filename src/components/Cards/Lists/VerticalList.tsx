import React from "react";

type Props = {
  children: JSX.Element[];
  className?: string;
  childClassName?: string;
};

const VerticalList = (props: Props) => {
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

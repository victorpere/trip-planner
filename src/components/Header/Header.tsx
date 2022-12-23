import React, { ReactNode } from "react";

const Header: React.FC<{ children?: ReactNode }> = ({children}) => {
  return <div>{children}</div>;
};

export default Header;

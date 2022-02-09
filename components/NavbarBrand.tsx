import React from "react";
import classNames from "classnames";

export function NavbarBrand({ className, children }) {
  const classes = classNames("flex items-center flex-shrink-0", className);
  return <div className={classes}>{children}</div>;
}

export default NavbarBrand;

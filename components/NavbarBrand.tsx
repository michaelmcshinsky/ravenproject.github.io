import React from "react";
import classNames from "classnames";

export function NavbarBrand({ className, children }) {
  const classes = classNames(
    "rvn--navbar_brand",
    "flex items-center flex-shrink-0 leading-none",
    className
  );
  return <div className={classes}>{children}</div>;
}

export default NavbarBrand;

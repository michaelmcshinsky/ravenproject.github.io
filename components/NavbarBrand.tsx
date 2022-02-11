import React from "react";
import classNames from "classnames";
import Link from "next/link";

export function NavbarBrand({ className, children }) {
  const classes = classNames(
    "rvn--navbar_brand",
    "flex items-center flex-shrink-0 leading-none",
    className
  );
  return (
    <Link href="/">
      <a className={classes}>{children}</a>
    </Link>
  );
}

export default NavbarBrand;

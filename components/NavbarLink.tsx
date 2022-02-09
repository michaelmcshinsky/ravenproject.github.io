import { ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type NavbarLinkProps = {
  block?: boolean;
  children: ReactNode;
  className?: string;
  href: string;
};

export function NavbarLink({
  block,
  children,
  className,
  href,
}: NavbarLinkProps) {
  const classes = classNames(
    "px-4 py-2 text-sm font-medium rounded-md",
    "text-gray-900 hover:bg-raven-yellow hover:text-white",
    'transform duration-300 ease',
    block && "block",
    className
  );

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}

export default NavbarLink;

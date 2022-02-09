import { ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames";

type FooterLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function FooterLink({
  children,
  className,
  href,
}: FooterLinkProps) {
  const classes = classNames(
    "py-2 text-sm cursor-pointer",
    "text-gray-100 hover:text-raven-yellow",
    className
  );

  return (
    <Link href={href} passHref>
      <li className="my-1">
        <a className={classes}>{children}</a>
      </li>
    </Link>
  );
}

export default FooterLink;

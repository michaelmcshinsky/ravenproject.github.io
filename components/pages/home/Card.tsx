import React, { ReactNode } from "react";
import classNames from "classnames";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ className, children }: CardProps) {
  const classes = classNames("p-4 bg-white shadow h-full rounded", className);

  return <div className={classes}>{children}</div>;
}

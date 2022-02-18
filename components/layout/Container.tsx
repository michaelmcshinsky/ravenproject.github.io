import { ReactNode } from "react";
import classNames from "classnames";

export interface ContainerProps {
  className?: string;
  children?: ReactNode;
  width?: string;
}

export function Container({
  className,
  children,
  width,
  ...props
}: ContainerProps) {
  const classes = classNames(
    "rvn--layout_container",
    "mx-auto px-4",
    width ? `max-w-${width}` : "max-w-7xl",
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

import { Container } from "@/components";
import { ReactNode } from "react";
import classNames from "classnames";

export interface PageHeaderProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  title?: ReactNode;
}

export function PageHeader({
  children,
  className,
  color,
  title,
}: PageHeaderProps) {
  const classes = classNames(
    "page-banner",
    "flex flex-col items-center justify-center mb-8 text-center text-white h-72",
    color ? `bg-raven-${color}` : "bg-raven-blue",
    className
  );

  return (
    <section className={classes}>
      {!!title && (
        <h1 className="mt-0 mb-2 text-5xl font-bold leading-none">{title}</h1>
      )}
      {!!children && (
        <Container width="3xl" className="text-xl leading-normal">
          {children}
        </Container>
      )}
    </section>
  );
}

export default PageHeader;

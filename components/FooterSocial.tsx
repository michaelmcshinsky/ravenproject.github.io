import classNames from "classnames";

type FooterSocialProps = {
  className?: string;
  href: string;
  icon: string;
};

export function FooterSocial({ className, href, icon }: FooterSocialProps) {
  const classes = classNames(
    "p-2 text-base text-2xl cursor-pointer",
    "text-gray-100 hover:text-raven-yellow",
    'block w-10 h-10 flex items-center justify-center',
    className
  );

  return (
    <li>
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        <i className={`fa fa-${icon}`}></i>
      </a>
    </li>
  );
}

export default FooterSocial;

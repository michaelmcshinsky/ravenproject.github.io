import {
  CaretDownIcon,
  DiscordLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Link, useParams } from "@tanstack/react-router";
// import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
// import { forwardRef, ReactNode } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Navbar() {
  const params = useParams({ strict: false });
  const lang = params.lang || "en";

  return (
    <header className="border-b border-gray-300 py-2">
      <NavigationMenu.Root className="relative z-10 flex w-full items-center justify-between max-w-6xl mx-auto px-4">
        <Link to=".">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 205.3 338.8"
            height="40px"
          >
            <script />
            <path
              fill="#384182"
              d="M89 274.9L0 338.8l56.5-260zm1.8-.6l54.2.7L58.6 79.8zm59.3-4.3l41.5-153.8L175.9 97zm-20-241.1l-68.3 46 99.8-32.3zm-8.6 0l-42.4 1.4L72.9 48z"
            />
            <path
              fill="#f79534"
              d="M172.9 91.1l-109.3-15 98.5-31zM147 33.3l6-16.3-31.5-13.7zm9.1-17.9l7.1 25.6 42-11.1z"
            />
            <path
              fill="#f0513a"
              d="M147.4 274L59.8 78 174 94zM126.8 28.9L72.8 50l-13 24zm-33.5-16L79.8 27.8l44.8-1.1zm23.6-11.6l-21.4 9.9 48.8 21.5zM141.3 0h-23l35.6 13.8zm13.3 18.3l-5.5 16.4 11 5.3z"
            />
          </svg>
        </Link>
        <NavigationMenu.List className="center m-0 flex items-center list-none rounded-md p-1">
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang`} params={{ lang }}>
                Home
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang/learn`} params={{ lang }}>
                Learn
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang/build`} params={{ lang }}>
                Build
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang/operate`} params={{ lang }}>
                Operate
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang/community`} params={{ lang }}>
                Community
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="block select-none rounded px-4 py-2 text-[15px] leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              asChild
            >
              <Link to={`/$lang/resources`} params={{ lang }}>
                Resources
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
              Connect{" "}
              <CaretDownIcon
                className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto border border-gray-300 rounded-md">
              <ul className="m-0 flex list-none gap-2 p-[22px] flex-col">
                <li className="flex items-center gap-x-2.5">
                  <GitHubLogoIcon />
                  <a href="">Github</a>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <DiscordLogoIcon />
                  <a href="">Discord</a>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <GitHubLogoIcon />
                  <a href="">Telegram</a>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <GitHubLogoIcon />
                  <a href="">Reddit</a>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <GitHubLogoIcon />
                  <a href="">Medium</a>
                </li>
                <li className="flex items-center gap-x-2.5">
                  <GitHubLogoIcon />
                  <a href="">Facebook</a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}

// interface ListItemProps {
//   className?: string;
//   children: ReactNode;
//   title: string;
//   href: string;
// }

// const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
//   ({ className, children, title, ...props }, forwardedRef) => (
//     <li>
//       <NavigationMenu.Link asChild>
//         <a
//           className={clsx(
//             "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
//             className
//           )}
//           {...props}
//           ref={forwardedRef}
//         >
//           <div className="mb-[5px] leading-[1.2] text-violet12">{title}</div>
//           <p className="leading-[1.4] text-mauve11">{children}</p>
//         </a>
//       </NavigationMenu.Link>
//     </li>
//   )
// );

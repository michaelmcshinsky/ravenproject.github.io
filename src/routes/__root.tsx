import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from "../utils/config";

export const Route = createRootRoute({
  beforeLoad: async (ctx) => {
    const {
      params,
      // location,
    }: { params: { lang?: string }; location: { pathname: string } } = ctx;
    if (!SUPPORTED_LANGUAGES.includes(params?.lang ?? "")) {
      // const pathname = location.pathname.replace(BASEPATH, "");
      redirect({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // to: `/${FALLBACK_LANGUAGE}${pathname}`,
        to: `/${FALLBACK_LANGUAGE}`,
        throw: true,
      });
    }
    return null;
  },
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "../components/Navbar";
import { BASEPATH, FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from "../utils/config";

export const Route = createRootRoute({
  beforeLoad: async (ctx) => {
    console.log("ctx", ctx);
    const {
      params,
      location,
    }: { params: { lang?: string }; location: { pathname: string } } = ctx;
    if (!SUPPORTED_LANGUAGES.includes(params?.lang ?? "")) {
      const pathname = location.pathname.replace(BASEPATH, "");
      redirect({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        to: `/${FALLBACK_LANGUAGE}${pathname}`,
        throw: true,
      });
    }
    return null;
  },
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

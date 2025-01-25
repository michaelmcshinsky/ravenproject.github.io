import { createFileRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createFileRoute("/$lang")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/$lang/community')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$lang/community"!</div>
}

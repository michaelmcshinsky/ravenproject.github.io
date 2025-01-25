import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/$lang/resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$lang/resources"!</div>
}

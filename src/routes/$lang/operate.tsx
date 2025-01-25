import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$lang/operate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$lang/explore"!</div>
}

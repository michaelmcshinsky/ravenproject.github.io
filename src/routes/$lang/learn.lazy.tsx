import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/$lang/learn')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$lang/learn"!</div>
}

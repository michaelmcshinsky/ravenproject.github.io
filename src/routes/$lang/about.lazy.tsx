import { createLazyFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createLazyFileRoute('/$lang/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  return <div>{t('about')}</div>
}

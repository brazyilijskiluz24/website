import { SidebarDesktop } from '@/components/sidebar-desktop'
import { fallbackLng, languages } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'
import { Params } from '@/app/[lng]/layout'
import TaxOffice from '@/components/ui/TaxOffice'

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: Params) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'chat')
  return {
    title: t('pageTitle')
  }
}

interface ChatLayoutProps extends Params {
  children: React.ReactNode
}

export default async function ChatLayout({
  children,
  params: { lng }
}: ChatLayoutProps) {
  return (
    <div className="relative flex h-screen overflow-hidden">
      <SidebarDesktop params={{ lng }} />
      {children}
    </div>
  )
}

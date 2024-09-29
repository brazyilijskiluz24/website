import { fallbackLng, languages, TLanguage } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'

export type Params = {
  params: {
    lng: TLanguage
  }
}

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: Params) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'common')
  return {
    title: t('title'),
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : undefined,
    description:
      'An AI-powered chatbot template built with Next.js and Vercel.',
    icons: {
      icon: {
        url: '/emblem.svg'
      },
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
    </div>
  )
}

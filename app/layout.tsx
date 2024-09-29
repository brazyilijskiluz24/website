import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'
import { fallbackLng, languages, TLanguage } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'
import { dir } from 'i18next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export type Params = {
  params: {
    lng: TLanguage
  }
}

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: Params) {
  const pathname = new URL(headers().get('x-request-url')!).pathname
  //@ts-ignore
  if (!lng && !languages.includes(pathname?.slice(1, 3) || '')) {
    redirect('/' + fallbackLng + '/' + pathname.slice(1))
  }

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'common')
  return {
    title: {
      default: 'e-podatek',
      template: `%s - e-podatek`
    },
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : undefined,
    description:
      '"e-podatek" - inteligentny asystent rządowy. Szybka i kompetentna pomoc w sprawach podatkowych, dostępna całodobowo.',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lng: TLanguage
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = new URL(headers().get('x-request-url')!).pathname

  const lng = pathname.slice(1, 3) || fallbackLng
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="white"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}

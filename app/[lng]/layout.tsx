import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { fallbackLng, languages, TLanguage } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'
import { dir } from 'i18next'
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
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png'
    }
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lng: TLanguage
  }
}

export default function RootLayout({
  children,
  params: { lng }
}: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header params={{ lng }} />
      <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
    </div>
  )
}

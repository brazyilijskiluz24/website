import { auth } from '@/auth'
import SignupForm from '@/components/signup-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'
import { Params } from '@/app/layout'
import { fallbackLng, languages } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'

export async function generateMetadata({ params: { lng } }: Params) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'auth')
  return {
    title: t('registerTitle')
  }
}

export default async function SignupPage({ params }: Params) {
  const session = (await auth()) as Session

  if (session) {
    redirect('/' + params.lng)
  }

  return (
    <main className="flex flex-1 flex-col p-4 items-center justify-center mb-16">
      <SignupForm params={params} />
    </main>
  )
}

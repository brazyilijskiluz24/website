import { Params } from '@/app/layout'
import { fallbackLng, languages } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'
import TestComp from '@/components/test-comp'

export async function generateMetadata({ params: { lng } }: Params) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'auth')
  return {
    title: t('registerTitle')
  }
}

export default async function SignupPage({ params }: Params) {
  return (
    <main className="flex flex-1 flex-col p-4 items-center justify-center mb-16">
      <TestComp />
    </main>
  )
}

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { useTranslation } from '@/app/i18n/client'
import { TLanguage } from '@/app/i18n/settings'

export function EmptyScreen({ lng }: { lng: TLanguage }) {
  const { t } = useTranslation(lng, 'chat')

  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
      <h1 className="text-lg font-semibold">{t('helloMsg')}</h1>
      <p>{t('hello')}</p>
    </div>
  )
}

import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
      <h1 className="text-lg font-semibold">Witaj! 👋</h1>
      <p>
        Witaj w serwisie e-podatek. Jestem Twoim inteligentnym asystentem,
        gotowym pomóc Ci w wypełnieniu formularzy podatkowych, dostępny 24/7.
      </p>
    </div>
  )
}

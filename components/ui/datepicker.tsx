'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { pl } from 'date-fns/locale'

import { cn, nanoid } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { TLanguage } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n/client'
import { useActions, useUIState } from 'ai/rsc'
import { AI } from '@/lib/chat/actions'
import { UserMessage } from '../stocks/message'
import dayjs from 'dayjs'

export function DatePickerDemo({ lng }: { lng: TLanguage }) {
  const [date, setDate] = React.useState<Date>()
  const { t } = useTranslation(lng, 'chat')

  const [, setMessages] = useUIState<typeof AI>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>{t('pickADate')}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          lang={'pl'}
          locale={pl}
          mode="single"
          selected={date}
          onSelect={async (date) => {
            const formattedDate = dayjs(date).format('DD.MM.YYYY')

            setMessages(currentMessages => [
              ...currentMessages,
              {
                id: nanoid(),
                display: <UserMessage>{formattedDate}</UserMessage>
              }
            ])

            setDate(date)
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

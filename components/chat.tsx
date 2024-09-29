'use client'

import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat-list'
import { ChatPanel } from '@/components/chat-panel'
import { EmptyScreen } from '@/components/empty-screen'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useEffect, useState } from 'react'
import { useUIState, useAIState } from 'ai/rsc'
import { Message, Session } from '@/lib/types'
import { usePathname, useRouter } from 'next/navigation'
import { useScrollAnchor } from '@/lib/hooks/use-scroll-anchor'
import { toast } from 'sonner'
import { TLanguage } from '@/app/i18n/settings'
import TaxOffice from '@/components/ui/TaxOffice'
import { DatePickerDemo } from '@/components/ui/datepicker'
import AdressSelect from '@/components/address-select'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
  session?: Session
  missingKeys: string[]
  lng: TLanguage
}

export function Chat({ id, className, session, missingKeys, lng }: ChatProps) {
  const router = useRouter()
  const path = usePathname()
  const [input, setInput] = useState('')
  const [messages] = useUIState()
  const [aiState] = useAIState()

  const [_, setNewChatId] = useLocalStorage('newChatId', id)

  useEffect(() => {
    if (session?.user) {
      if (!path.includes('chat') && messages.length === 1) {
        window.history.replaceState({}, '', `/${lng}/chat/${id}`)
      }
    }
  }, [id, path, session?.user, messages])

  useEffect(() => {
    const messagesLength = aiState.messages?.length
    if (messagesLength === 2) {
      router.refresh()
    }
  }, [aiState.messages, router])

  useEffect(() => {
    setNewChatId(id)
  })

  useEffect(() => {
    missingKeys.map(key => {
      toast.error(`Missing ${key} environment variable!`)
    })
  }, [missingKeys])

  const { messagesRef, scrollRef, visibilityRef, isAtBottom, scrollToBottom } =
    useScrollAnchor()

  return (
    <div
      className="group w-full pt-20 h-screen relative xl:h-screen xl:pt-0 overflow-auto pl-0 peer-[[data-state=open]]:xl:pl-[250px]"
      ref={scrollRef}
    >
      <div
        className={
          'h-full flex flex-col justify-around pb-52 relative mx-auto sm:max-w-2xl sm:px-4'
        }
      >
        <div
          className={cn('pb-[128px] pt-4 md:pt-10', className)}
          ref={messagesRef}
        >
          {messages.length ? (
            <ChatList
              messages={messages}
              isShared={false}
              session={session}
              lng={lng}
            />
          ) : (
            <EmptyScreen />
          )}
          <div className="w-full h-px" ref={visibilityRef} />
        </div>
        {/*<TaxOffice params={{ lng }} />*/}
        {/*<DatePickerDemo lng={lng}/>*/}
        {/*<AdressSelect params={{ lng }} />*/}
        <ChatPanel
          id={id}
          input={input}
          setInput={setInput}
          isAtBottom={isAtBottom}
          scrollToBottom={scrollToBottom}
          lng={lng}
        />
      </div>
    </div>
  )
}

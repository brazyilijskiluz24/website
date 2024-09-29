import * as React from 'react'

import { shareChat } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconShare } from '@/components/ui/icons'
import { ChatShareDialog } from '@/components/chat-share-dialog'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import type { AI } from '@/lib/chat/actions'
import { nanoid } from '@/lib/utils'
import { UserMessage } from '@/components/stocks/message'
import ChatCard from '@/components/chat-card'
import { TLanguage } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n/client'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
  lng: TLanguage
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom,
  lng
}: ChatPanelProps) {
  const { t } = useTranslation(lng, 'chat')
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const exampleMessages = [
    {
      heading: t('carTitle'),
      image: 'car-purchase.svg',
      type: t('carDesc')
    },
    {
      heading: t('loanTitle'),
      image: 'loan.svg',
      type: t('loanDesc')
    }
  ]

  return (
    <div className="inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 ">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
      <div className="mx-auto sm:max-w-2xl w-full">
        {messages.length === 0 && (
          <div className="mb-4 grid grid-cols-1 gap-2 px-4 sm:px-0">
            <div
              className={`rounded-lg border bg-white p-4 dark:bg-zinc-950 dark:hover:bg-zinc-900`}
            >
              <b>{t('otherTitle')}</b>
              <p>{t('otherDesc')}</p>
            </div>
          </div>
        )}
        <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0 place-items-center">
          {messages.length === 0 &&
            exampleMessages.map((example, index) => (
              <ChatCard
                {...example}
                onClick={async () => {
                  setMessages(currentMessages => [
                    ...currentMessages,
                    {
                      id: nanoid(),
                      display: <UserMessage>{example.type}</UserMessage>
                    }
                  ])

                  const responseMessage = await submitUserMessage(example.type)

                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                }}
              />
            ))}
        </div>

        {messages?.length >= 2 ? (
          <div className="flex h-12 items-center justify-center">
            <div className="flex space-x-2">
              {id && title ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => setShareDialogOpen(true)}
                  >
                    <IconShare className="mr-2" />
                    Share
                  </Button>
                  <ChatShareDialog
                    open={shareDialogOpen}
                    onOpenChange={setShareDialogOpen}
                    onCopy={() => setShareDialogOpen(false)}
                    shareChat={shareChat}
                    chat={{
                      id,
                      title,
                      messages: aiState.messages
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="absolute bottom-0 w-[calc(100%-2rem)] space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm input={input} setInput={setInput} lng={lng} />
        </div>
      </div>
    </div>
  )
}

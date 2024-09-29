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
import PersonalData from '@/components/personal-data'

export interface ChatPanelProps {
  id?: string
  title?: string
  input: string
  setInput: (value: string) => void
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ChatPanel({
  id,
  title,
  input,
  setInput,
  isAtBottom,
  scrollToBottom
}: ChatPanelProps) {
  const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions()
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false)

  const exampleMessages = [
    {
      heading: 'Zakup samochodu',
      image: 'car-purchase.svg',
      type: 'car'
    },
    {
      heading: 'Otrzymałem pożyczkę',
      image: 'loan.svg',
      type: 'loan'
    },
    {
      heading: 'Wyrok sądu lub ugoda',
      image: 'court-decision.svg',
      type: 'court'
    },
    {
      heading: 'Inna sprawa',
      image: 'other.svg',
      type: 'other'
    }
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom
        isAtBottom={isAtBottom}
        scrollToBottom={scrollToBottom}
      />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <PersonalData />

        {messages.length === 0 && (
          <div className="mb-4 grid grid-cols-1 gap-2 px-4 sm:px-0">
            <div
              className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900`}
            >
              <b>Gotowe przypadki</b>
              <p>
                Wiesz dokładnie co chcesz zrobić? Wybierz jeden z przygotowanych
                scenariuszy. W przeciwnym wypadku opisz nam jaki masz zamiar.
              </p>
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

        <div className="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <PromptForm input={input} setInput={setInput} />
        </div>
      </div>
    </div>
  )
}

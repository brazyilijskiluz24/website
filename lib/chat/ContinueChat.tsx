'use client'

import React from 'react'
import { useAIState, useActions, useUIState } from 'ai/rsc'
import { AI } from './actions'
import { nanoid } from 'nanoid'
import { UserMessage } from '@/components/stocks/message'

const DownloadButton = () => {
  // const [aiState] = useAIState()
  const [messages, setMessages] = useUIState<typeof AI>()
  const {submitUserMessage} = useActions()

  const continueConversation = async() => {
    console.log({messages})
    setMessages(currentMessages => [
      ...currentMessages,
      {
        id: nanoid(),
        display: <UserMessage>lol</UserMessage>
      }
    ])

    await submitUserMessage('lol')


  }

  return (
    <button onClick={continueConversation}>
      Kontynuuj rozmowę
    </button>
  )
}

export default DownloadButton

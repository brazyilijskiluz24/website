import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'
import { Params } from '@/app/layout'

export default async function IndexPage({ params }: Params) {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat
        lng={params.lng}
        id={id}
        session={session}
        missingKeys={missingKeys}
      />
    </AI>
  )
}

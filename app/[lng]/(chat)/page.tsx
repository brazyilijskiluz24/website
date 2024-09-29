import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'
import { Session } from '@/lib/types'
import { getMissingKeys } from '@/app/actions'
import { useTranslation } from '@/app/i18n'
import { Params } from '@/app/[lng]/layout'
import { fallbackLng, languages } from '@/app/i18n/settings'
import OpenSidebar from '@/components/open-sidebar'

export async function generateMetadata({ params: { lng } }: Params) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'chat')
  return {
    title: 'e-podatek'
  }
}

export default async function IndexPage({ params }: Params) {
  const id = nanoid()
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  return (
    <>
      <OpenSidebar />
      <AI initialAIState={{ chatId: id, messages: [] }}>
        <Chat
          id={id}
          session={session}
          missingKeys={missingKeys}
          lng={params.lng}
        />
      </AI>
    </>
  )
}

import { Params } from '@/app/layout'

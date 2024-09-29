import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { Session } from '@/lib/types'
import { ChatHistory } from '@/components/chat-history'
import { Params } from '@/app/layout'

async function UserOrLogin({ params }: Params) {
  const session = (await auth()) as Session
  return (
    <>
      {session?.user ? (
        <>
          <SidebarMobile>
            <ChatHistory userId={session.user.id} lng={params.lng} />
          </SidebarMobile>
          {/*<SidebarToggle />*/}
        </>
      ) : (
        <Link href={`/${params.lng}/new`} rel="nofollow">
          <IconNextChat className="size-6 mr-2 dark:hidden" inverted />
          <IconNextChat className="hidden size-6 mr-2 dark:block" />
        </Link>
      )}
    </>
  )
}

export function MobileHeader({ params: { lng } }: Params) {
  return (
    <header className="absolute w-screen left-0 bg-white border-b lg:hidden top-0 z-50 flex items-center justify-between h-16 px-4 shrink-0 bg-gradient-to-b via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin params={{ lng }} />
        </React.Suspense>
      </div>
    </header>
  )
}

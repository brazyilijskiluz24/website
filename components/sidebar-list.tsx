import { getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { TLanguage } from '@/app/i18n/settings'

interface SidebarListProps {
  userId?: string
  children?: React.ReactNode
  lng: TLanguage
}

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId)
})

export async function SidebarList({ userId, lng }: SidebarListProps) {
  const chats = await loadChats(userId)

  if (!chats || 'error' in chats) {
    redirect('/' + lng)
  } else {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-auto">
          {chats?.length ? (
            <div className="space-y-2 px-2">
              <SidebarItems chats={chats} lng={lng} />
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sm text-muted-foreground">
                {userId
                  ? 'Brak historii czatu'
                  : 'Brak historii czatu. Zaloguj sięaby umożliwić zapis'}
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between p-4">
          <ThemeToggle />
          <ClearHistory isEnabled={chats?.length > 0} lng={lng} />
        </div>
      </div>
    )
  }
}

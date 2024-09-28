'use client'

import { Chat } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'

import { removeChat, shareChat } from '@/app/actions'

import { SidebarActions } from '@/components/sidebar-actions'
import { SidebarItem } from '@/components/sidebar-item'
import { TLanguage } from '@/app/i18n/settings'

interface SidebarItemsProps {
  chats?: Chat[]
  lng: TLanguage
}

export function SidebarItems({ chats, lng }: SidebarItemsProps) {
  if (!chats?.length) return null

  return (
    <AnimatePresence>
      {chats.map(
        (chat, index) =>
          chat && (
            <motion.div
              key={chat?.id}
              exit={{
                opacity: 0,
                height: 0
              }}
            >
              <SidebarItem index={index} chat={chat} lng={lng}>
                <SidebarActions
                  chat={chat}
                  removeChat={removeChat}
                  shareChat={shareChat}
                />
              </SidebarItem>
            </motion.div>
          )
      )}
    </AnimatePresence>
  )
}

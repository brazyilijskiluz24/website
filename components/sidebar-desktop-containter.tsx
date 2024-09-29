//'use client'

import React from 'react'
import { Header } from '@/components/header'
import { ChatHistory } from '@/components/chat-history'
import { User } from 'next-auth'
import { TLanguage } from '@/app/i18n/settings'
import { LoginButton } from '@/components/login-button'
import { ChevronLeftIcon, InfoCircledIcon } from '@radix-ui/react-icons'
import { useTranslation } from '@/app/i18n'

const SidebarDesktopContainer = ({
  user,
  lng
}: {
  user?: User
  lng: TLanguage
}) => {
  return (
    <>
      <Header />
      <Profile user={user} lng={lng} />
      <ChatHistory userId={user?.id} lng={lng} />
    </>
  )
}

export default SidebarDesktopContainer

const Profile = (props: { user?: User; lng: TLanguage }) => {
  const { t } = useTranslation(props.lng, 'chat')

  if (!props.user) {
    return (
      <div className={'flex gap-2 items-center mt-10 lg:px-4 xl:px-6'}>
        <div
          className={
            'min-h-[2.5rem] min-w-[2.5rem] bg-neutral-200 rounded-full'
          }
        >
          <image
            href={
              'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
            }
            className={'w-full h-full'}
            //@ts-ignore
            alt={'zdj profilowe'}
          />
        </div>
        <LoginButton lng={props.lng} />
      </div>
    )
  }

  return (
    <div>
      <div className={'flex items-center mt-10 lg:px-4 xl:px-6'}>
        <div className={'flex flex-col'}>
          <h2 className={'text-sm font-medium'}>{props.user.email}</h2>
          <h3 className={'text-xs'}>{t('account')}</h3>
        </div>
      </div>
      <div
        className={
          'flex items-center pb-6 border-b border-b-border lg:px-4 xl:px-6 mt-5'
        }
      >
        <InfoCircledIcon />
        <p className={'text-sm ml-2 mr-auto'}>{t('editAccount')}</p>
        <ChevronLeftIcon />
      </div>
    </div>
  )
}

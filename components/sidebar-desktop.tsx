import { Sidebar } from '@/components/sidebar'

import { auth } from '@/auth'
import {
  ChevronLeftIcon,
  DoubleArrowLeftIcon,
  InfoCircledIcon
} from '@radix-ui/react-icons'
import { ChatHistory } from '@/components/chat-history'
import { Params } from '@/app/layout'
import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Header } from '@/components/header'

export async function SidebarDesktop({ params }: Params) {
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }

  return (
    <Sidebar className="peer pt-6 mb-10  absolute inset-y-0 z-30 bg-white hidden -translate-x-full border-r duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      <Header />
      <Profile />
      <ChatHistory userId={session.user.id} lng={params.lng} />
    </Sidebar>
  )
}

const Profile = () => {
  return (
    <div>
      <div className={'flex items-center mt-10 lg:px-4 xl:px-6'}>
        <image
          href={
            'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
          }
          className={'h-10 w-10 bg-green-400 rounded-full mr-2'}
          //@ts-ignore
          alt={'zdj profilowe'}
        />
        <div className={'flex flex-col'}>
          <h2 className={'text-sm font-medium'}>Załóż konto</h2>
          <h3 className={'text-xs'}>Jakiś tekst</h3>
        </div>
      </div>
      <div
        className={
          'flex items-center pb-6 border-b border-b-border lg:px-4 xl:px-6 mt-5'
        }
      >
        <InfoCircledIcon />
        <p className={'text-sm ml-2 mr-auto'}>Edytuj dane osobowe</p>
        <ChevronLeftIcon />
      </div>
    </div>
  )
}

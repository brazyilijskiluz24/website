import { Sidebar } from '@/components/sidebar'
import { auth } from '@/auth'
import { Params } from '@/app/layout'
import SidebarDesktopContainer from '@/components/sidebar-desktop-containter'

export async function SidebarDesktop({ params }: Params) {
  const session = await auth()

  // if (!session?.user?.id) {
  //   return null
  // }

  return (
    <Sidebar className="peer pt-6 mb-10  absolute inset-y-0 z-30 bg-white hidden -translate-x-full border-r duration-300 ease-in-out data-[state=open]:translate-x-0 xl:flex xl:w-[250px]">
      <SidebarDesktopContainer lng={params.lng} user={session?.user} />
    </Sidebar>
  )
}

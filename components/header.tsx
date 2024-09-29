'use client'

import { useSidebar } from '@/lib/hooks/use-sidebar'
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'

export const Header = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <div className={'hidden lg:flex justify-between lg:px-4 xl:px-6'}>
      <h1 className={'font-bold'}>
        <span className={'text-red'}>e</span>-podatek
      </h1>
      <DoubleArrowLeftIcon
        onClick={toggleSidebar}
        className={'text-red'}
        width={24}
        height={24}
      />
    </div>
  )
}

'use client'

import React from 'react'
import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'
import { useSidebar } from '@/lib/hooks/use-sidebar'

const OpenSidebar = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <div
      className={
        'hidden xl:block dark:bg-black bg-white h-screen pt-5 px-7 border-r'
      }
    >
      <DoubleArrowLeftIcon
        onClick={toggleSidebar}
        className={'text-red rotate-180 cursor-pointer'}
        width={24}
        height={24}
      />
    </div>
  )
}

export default OpenSidebar

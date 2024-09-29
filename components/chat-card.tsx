'use client'
import React from 'react'

interface ChatCardProps {
  heading: string
  type: string
  onClick: () => void
  image: string
}

const ChatCard = (props: ChatCardProps) => {
  return (
    <div
      key={props.heading}
      className={`cursor-pointer justify-end max-w-[18rem] min-h-[6rem] h-full rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 flex flex-col items-center w-full`}
      onClick={props.onClick}
    >
      <img
        src={`/images/${props.image}`}
        alt={props.heading}
        className="w-auto h-16 mb-2 object-contain"
      />
      <div className="text-sm font-semibold text-left w-full px-2">
        {props.heading}
      </div>
    </div>
  )
}

export default ChatCard

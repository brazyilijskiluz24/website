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
      className={`cursor-pointer rounded-lg border bg-white p-4 hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 flex flex-col items-center justify-center w-full`}
      onClick={props.onClick}
    >
      <img
        src={`/images/${props.image}`}
        alt={props.heading}
        className="w-24 h-24 mb-2"
      />
      <div className="text-sm font-semibold text-center">{props.heading}</div>
    </div>
  )
}

export default ChatCard

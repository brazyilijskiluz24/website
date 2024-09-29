'use client'

import React from 'react'
import Map from '@/components/ui/Map'
import ChatCard from '@/components/chat-card'

const TestComp = () => {
  return (
    <>
      <Map position={[45, 42]} id={'1'} />
      <div className={'w-full flex gap-14'}>
        <ChatCard
          heading={'Osoba prywatna'}
          type={'company123'}
          onClick={() => {
            'use client'
            console.log('click')
          }}
          image={'private-person.png'}
        />
        <ChatCard
          heading={'Firma'}
          type={'company'}
          onClick={() => {
            'use client'
            console.log('click')
          }}
          image={'company.png'}
        />
      </div>
    </>
  )
}

export default TestComp

import React from 'react'
import HeadlinePost from './HeadlinePost'
import Link from 'next/link'

export default function Community() {
  return (
    <div className='px-20 pt-5 space-y-5'>
        <div className='flex text-sm font-bold px-4'>
            <div className='px-3 py-2 text-white bg-black rounded-3xl'>
                <span>CLUB AND COMMUNITY</span>
            </div>
            <Link href={''} className='ml-auto flex gap-1 items-center text-gray-500 group hover:opacity-30'>
                <span>MORE</span>
                <img src="arrow.svg" alt="" className='h-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </Link>
        </div>
        <div className='flex gap-10'>
            <HeadlinePost dark={true} Image='community.webp' title='Feature' text='We Love You Liverpool: Meet Official LFC Supporters Club... Philadelphia' time={new Date('2024-07-31')} />
            <HeadlinePost dark={true} Image='community.webp' title='Feature' text='We Love You Liverpool: Meet Official LFC Supporters Club... Philadelphia' time={new Date('2024-07-31')} />
            <HeadlinePost dark={true} Image='community.webp' title='Feature' text='We Love You Liverpool: Meet Official LFC Supporters Club... Philadelphia' time={new Date('2024-07-31')} />
        </div>
    </div>
  )
}

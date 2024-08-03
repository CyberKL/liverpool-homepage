import React from 'react'
import HeadlinePost from './HeadlinePost'

export default function Community() {
  return (
    <div className='px-20 pt-5 space-y-5'>
        <div className='flex text-xs font-bold px-4'>
            <div className='px-3 py-2 text-white bg-black rounded-3xl'>
                <span>CLUB AND COMMUNITY</span>
            </div>
            <div className='ml-auto flex gap-1 items-center text-gray-500'>
                <span>MORE</span>
                <img src="arrow.svg" alt="" className='h-3' />
            </div>
        </div>
        <div className='flex gap-10'>
            <HeadlinePost dark={true} />
            <HeadlinePost dark={true} />
            <HeadlinePost dark={true} />
        </div>
    </div>
  )
}

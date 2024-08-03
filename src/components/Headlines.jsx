import React from 'react'
import HeadlinePost from './HeadlinePost'

export default function Headlines() {
  return (
    <div className='px-20 pt-5 space-y-5'>
        <div className='flex text-white text-xs font-bold px-4'>
            <div className='px-3 py-2 bg-black bg-opacity-15 rounded-3xl'>
                <span>HEADLINES</span>
            </div>
            <div className='ml-auto flex gap-1 items-center'>
                <span>ALL NEWS</span>
                <img src="arrow.svg" alt="" className='h-3 filter invert' />
            </div>
        </div>
        <div className='space-y-16'>
            <div className='flex gap-10'>
                <HeadlinePost />
                <HeadlinePost />
                <HeadlinePost />
            </div>
            <div className='flex gap-10'>
                <HeadlinePost />
                <HeadlinePost />
                <HeadlinePost />
            </div>
        </div>
    </div>
  )
}

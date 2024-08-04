import React from 'react'
import HeadlinePost from './HeadlinePost'
import Link from 'next/link'

export default function Women() {
  return (
    <div className='px-20 pt-5 space-y-5'>
        <div className='flex text-white text-sm font-bold px-4'>
            <div className='px-3 py-2 bg-black bg-opacity-15 rounded-3xl'>
                <span>LFC WOMEN</span>
            </div>
            <Link href={''} className='ml-auto flex gap-1 items-center group hover:opacity-80'>
                <span>MORE NEWS</span>
                <img src="arrow.svg" alt="" className='h-3 filter invert transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </Link>
        </div>
        <div className='flex gap-10'>
            <HeadlinePost Image='lfcw.webp' title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
            <HeadlinePost Image='lfcw.webp' title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
            <HeadlinePost Image='lfcw.webp' title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
        </div>
    </div>
  )
}

import React from 'react'
import HeadlinePost from '../common/HeadlinePost'
import { Link } from 'react-router-dom'
import lfcw from '../../assets/lfcw.webp'

export default function Women() {
  return (
    <div className='sm:px-20 px-4 pt-5 space-y-5'>
        <div className='flex text-white text-sm font-bold px-4'>
            <div className='px-3 py-2 bg-black bg-opacity-15 rounded-3xl'>
                <span>LFC WOMEN</span>
            </div>
            <Link to={''} className='ml-auto flex gap-1 items-center group hover:opacity-80'>
                <span>MORE NEWS</span>
                <img src="arrow.svg" alt="" className='h-3 filter invert transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </Link>
        </div>
        <div className='grid sm:grid-cols-3 gap-10'>
            <HeadlinePost Image={lfcw} title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
            <HeadlinePost Image={lfcw} title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
            <HeadlinePost Image={lfcw} title='News' text='First game for LFC Women at St Helens to be pre-season Merseyside derby' time={new Date('2024-08-02')} />
        </div>
    </div>
  )
}

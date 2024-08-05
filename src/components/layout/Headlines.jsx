import React from 'react'
import HeadlinePost from '../common/HeadlinePost'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import retail from '../../assets/Retail.png'

export default function Headlines() {
  return (
    <div className='px-20 pt-5 space-y-5'>
        <div className='flex text-white text-sm font-bold px-4'>
            <div className='px-3 py-2 bg-black bg-opacity-15 rounded-3xl'>
                <span>HEADLINES</span>
            </div>
            <Link to={'news'} className='ml-auto flex items-center group hover:opacity-80'>
                <span>ALL NEWS</span>
                <img src={arrow} alt="" className='h-4 filter invert transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </Link>
        </div>
        <div className='space-y-16'>
            <div className='grid grid-cols-3 gap-x-2'>
                <HeadlinePost />
                <HeadlinePost />
                <HeadlinePost />
            </div>
            <div className='grid grid-cols-3 gap-x-2'>
                <Link to={''} className='p-3 pb-0 hover:bg-black hover:bg-opacity-10 transition ease-in duration-200'>
                    <div className='p-4 space-y-5 bg-emerald-800 text-white'>
                        <div className='text-2xl'>
                            <span className='text-xl font-bold mr-2'>
                                LFC ONLINE STORE
                            </span>
                            Shop the latest LFC label fashion, souvenirs and more. LFC Official Members and season ticket holders get 10% off!
                        </div>
                        <img src={retail} alt="" className='ml-auto size-[9rem]' />
                        <div>
                            <button className='text-white font-bold flex items-center px-5 bg-black w-full h-14 hover:bg-opacity-60'>
                                BUY NOW
                                <img src={arrow} alt="" className='filter invert h-4' />
                            </button>
                        </div>
                    </div>
                </Link>
                <HeadlinePost />
                <HeadlinePost />
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import RetailPost from './RetailPost'

export default function Retail() {
  return (
    <div className='space-y-5 px-20'>
        <div className='py-2 px-5 bg-black text-xs font-bold text-white w-fit rounded-3xl'>
            <span>LFC RETAIL</span>
        </div>
        <div className=''>
            <ul className='flex gap-8'>
                <li>NEW: 24/25 AWAY KIT</li>
                <li>NEW: 24/25 TRAINING</li>
                <li>YOU MAY LIKE</li>
            </ul>
        </div>
        <div className='flex gap-10'>
            <RetailPost />
            <RetailPost />
            <RetailPost />
            <RetailPost />
            <RetailPost />
        </div>
        <div className='flex justify-center items-center'>
            <button className='flex items-center px-5 pb-4 bg-yellow-300 h-12 hover:bg-opacity-95'>
                VISIT THE LFC STORE NOW
                <img src="arrow.svg" alt="" className='h-4' />
            </button>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'

export default function RetailPost({ Image, Description, Price, OriginalPrice }) {
  return (
    <Link to={''} className='border border-gray-200 min-h flex flex-col'>
        <div className='relative'>
            <img src={Image} alt="" className='w-auto h-full' />
            {OriginalPrice && (
                <div className='absolute bottom-0 left-0 mb-4 ml-3 py-1 px-4 bg-yellow-400 text-sm font-bold text-black w-fit rounded-3xl flex gap-2'>
                    SALE
                </div>
            )}
        </div>
        <div className='space-y-10 p-5 flex-grow'>
            <div>
                <span className='text-gray-600 text-sm'>{Description}</span>
            </div>
            <div className='font-bold'>
                <div>
                    <span className='text-4xl'>£{Price}</span>
                    <div className={OriginalPrice ? 'block' : 'invisible'}>
                        <span className='text-gray-600 line-through font-normal text-lg block'>£{OriginalPrice}</span>
                    </div>
                </div>
                <button className='text-white flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60'>
                    BUY NOW
                    <img src={arrow} alt="" className='filter invert h-4' />
                </button>
            </div>
        </div>
    </Link>
  )
}

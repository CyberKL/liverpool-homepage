import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'

export default function RetailPost({ Image, Description, Price, OriginalPrice }) {
  return (
    <Link to={''} className='border border-gray-200 min-h grid sm:grid-cols-1 grid-cols-2 dark:bg-white'>
        <div className='relative'>
            <img src={Image} alt="" className='w-auto h-full' />
            {OriginalPrice && (
                <div className='absolute bottom-0 left-0 mb-4 ml-3 py-1 px-4 bg-yellow-400 text-sm font-bold text-black w-fit rounded-3xl flex gap-2'>
                    SALE
                </div>
            )}
        </div>
        <div className='sm:space-y-10 space-y-28 p-5 flex-grow'>
            <div>
                <span className='text-gray-600 lg:text-sm sm:text-xs text-xl'>{Description}</span>
            </div>
            <div className='font-bold'>
                <div>
                    <span className='lg:text-4xl text-4xl sm:text-2xl'>£{Price}</span>
                    <div className={OriginalPrice ? 'block' : 'invisible'}>
                        <span className='text-gray-600 line-through font-normal text-lg block'>£{OriginalPrice}</span>
                    </div>
                </div>
                <button className='text-white flex items-center lg:px-5 lg:pb-4 sm:px-3 sm:pb-2 px-5 pb-4 bg-black w-full h-16 lg:h-16 sm:h-10 hover:bg-opacity-60 lg:text-base sm:text-xs'>
                    BUY NOW
                    <img src={arrow} alt="" className='filter invert h-4' />
                </button>
            </div>
        </div>
    </Link>
  )
}

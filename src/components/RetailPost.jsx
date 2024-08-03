import React from 'react'

export default function RetailPost() {
  return (
    <div className='border border-gray-200'>
        <div>
            <img src="model.jpg" alt="" className='w-auto h-full' />
        </div>
        <div className='space-y-10 p-5'>
            <div>
                <span className='text-gray-600 text-sm'>LFC NIKE MENS 24/25 AWAY STADIUM JERSEY</span>
            </div>
            <div className='font-bold space-y-2'>
                <span className='text-4xl'>£80.00</span>
                <button className='text-white flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60'>
                    BUY NOW
                    <img src="arrow.svg" alt="" className='filter invert h-4' />
                </button>
            </div>
        </div>
    </div>
  )
}

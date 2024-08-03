import React from 'react'

export default function Fixture() {
  return (
    <div className='space-y-20 border border-gray-200 w-full p-5'>
        <div>
            <h3 className='font-bold'>FRIENDLY</h3>
            <p className='text-gray-600 text-sm'>THU 1 AUGUST — 2:30</p>
        </div>
        <div className='flex items-center'>
            <div className='space-y-3 flex-grow mr-5'>
                <div className='flex gap-5'>
                    <img src="" alt="logo" />
                    <span className='font-semibold'>Liverpool</span>
                </div>
                <hr className=''/>
                <div className='flex gap-5'>
                    <img src="" alt="logo" />
                    <span>Arsenal</span>
                </div>
            </div>
            <div className='bg-gray-100 ml-auto flex flex-col px-7 py-4 gap-5 text-xl'>
                <span>2</span>
                <span>1</span>
            </div>
        </div>
        <div>
        <button className='text-white font-bold flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60'>
            MATCH REPORT
            <img src="arrow.svg" alt="" className='filter invert h-4' />
        </button>
        </div>
    </div>
  )
}

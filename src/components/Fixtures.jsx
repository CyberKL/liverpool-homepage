import React from 'react'
import Fixture from './Fixture'

export default function Fixtures() {
  return (
    <div className='px-20 space-y-10'>
      <div className='flex'>
        <div className='py-2 px-5 bg-black text-xs font-bold text-white w-fit rounded-3xl'>
          <span>PRE-SEASON</span>
        </div>
        <div className='ml-auto flex gap-8 items-center'>
          <div className='py-2 px-5 bg-yellow-400 text-xs font-bold text-white w-fit rounded-3xl flex gap-2'>
            <img src="down-arrow.svg" alt="" />
            <span>ADD FIXTURES TO CALENDAR</span>
          </div>
          <div className='flex gap-1 items-center'>
            <span>All FIXTURES</span>
            <img src="arrow.svg" alt="" className='h-4' />
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        <Fixture />
        <Fixture />
        <Fixture />
      </div>
    </div>
  )
}

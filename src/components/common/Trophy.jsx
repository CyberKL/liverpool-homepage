import React from 'react'

export default function Trophy({src, text}) {
  return (
    <div className='w-full flex flex-col items-center gap-2'>
        <img src={src} alt="" className='w-8/12 dark:invert' />
        <span className='font-bold text-gray-600 dark:text-white'>{text}</span>
    </div>
  )
}

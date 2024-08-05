import React from 'react'
import memorial1989 from '../../assets/memorial-1989.svg'
import memorial1985 from '../../assets/memorial-1985.svg'

export default function Memory() {
  return (
    <div className='px-20 flex justify-center gap-10'>
        <div className='bg-gray-100 w-full'>
            <img src={memorial1989} alt="" className='w-full h-full' />
        </div>
        <div className='bg-gray-100 w-full'>
            <img src={memorial1985} alt="" className='w-full h-full' />
        </div>
    </div>
  )
}

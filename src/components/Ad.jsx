import Link from 'next/link'
import React from 'react'

export default function 
({ Ad, Height }) {
  return (
    <Link href={''} className={`overflow-hidden bg-gray-50 ${Height}`}>
      <img src={Ad} alt="" className='object-cover'/>
    </Link>
  )
}

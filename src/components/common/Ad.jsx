import { Link } from 'react-router-dom'
import React from 'react'

export default function 
({ Ad, Height }) {
  return (
    <Link to={''} className={`overflow-hidden bg-gray-50 ${Height} w-fit`}>
      <img src={Ad} alt="" className='object-cover'/>
    </Link>
  )
}

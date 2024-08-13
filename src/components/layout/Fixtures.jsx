import React from 'react'
import Fixture from '../common/Fixture'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'
import downArrow from '../../assets/down-arrow.svg'

export default function Fixtures() {
  return (
    <div className='sm:px-20 px-4 space-y-10'>
      <div className='grid sm:grid-cols-3 gap-4'>
        <div className='py-2 px-3 bg-black text-sm font-bold text-white rounded-3xl'>
          <span>PRE-SEASON</span>
        </div>
        <div className='ml-auto flex gap-8 items-center'>
          <Link to={''} className='py-2 px-5 bg-yellow-400 text-sm font-bold text-black w-fit rounded-3xl flex gap-2'>
            <img src={downArrow} alt="" />
            <span>ADD FIXTURES TO CALENDAR</span>
          </Link>
          <Link to={''} className='flex gap-1 items-center text-sm text-gray-600 font-bold group hover:opacity-80'>
            <span>All FIXTURES</span>
            <img src={arrow} alt="" className='h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
      <div className='grid sm:grid-cols-3 gap-5'>
        <Fixture Competition={'friendly'} Date={new Date('2024-08-04T02:45:00')} Score={'1-1'} Team={'Man Utd'} Home={true} />
        <Fixture Tickets={true} Competition={'friendly'} Date={new Date('2024-08-11T14:30:00')} Team={'Sevilla'} Home={true}/>
        <Fixture Competition={'friendly'} Date={new Date('2024-08-11T19:00:00')} Team={'Las Palmas'} Home={true}/>
      </div>
    </div>
  )
}

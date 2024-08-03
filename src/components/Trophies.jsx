import React from 'react'
import Trophy from './Trophy'

export default function Trophies() {
  return (
    <div className='px-20 py-10 flex gap-16'>
      <Trophy src='PL.svg' text='19' />
      <Trophy src='UCL.svg' text='6' />
      <Trophy src='FA.svg' text='8' />
      <Trophy src='UEFA.svg' text='3' />
      <Trophy src='EFL.svg' text='10' />
      <Trophy src='Super.svg' text='4' />
      <Trophy src='CWC.svg' text='1' />
    </div>
  )
}

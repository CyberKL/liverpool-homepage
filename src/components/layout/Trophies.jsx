import React from 'react'
import Trophy from '../common/Trophy'
import PL from '../../assets/PL.svg'
import UCL from '../../assets/UCL.svg'
import FA from '../../assets/FA.svg'
import UEFA from '../../assets/UEFA.svg'
import EFL from '../../assets/EFL.svg'
import Super from '../../assets/Super.svg'
import CWC from '../../assets/CWC.svg'

export default function Trophies() {
  return (
    <div className='sm:px-20 px-4 py-10 grid sm:grid-cols-7 grid-cols-2 gap-16'>
      <Trophy src={PL} text='19' />
      <Trophy src={UCL} text='6' />
      <Trophy src={FA} text='8' />
      <Trophy src={UEFA} text='3' />
      <Trophy src={EFL} text='10' />
      <Trophy src={Super} text='4' />
      <Trophy src={CWC} text='1' />
    </div>
  )
}

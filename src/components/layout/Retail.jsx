'use client'

import React, { useState } from 'react'
import RetailSection from './RetailSection'
import arrow from '../../assets/arrow.svg'


export default function Retail() {
    const [activeSection, setActiveSection] = useState("Away")

    const handleClick = (e) => {
        switch (e.target.id) {
            case "Away": {
                if (activeSection !== "Away") {
                    setActiveSection("Away")
                }
                break;
            }
            case "Training": {
                if (activeSection !== "Training") {
                    setActiveSection("Training")
                }
                break;
            }
            case "Like": {
                if (activeSection !== "Like") {
                    setActiveSection("Like")
                }
                break;
            }
        }
    }


  return (
    <div className='space-y-5 sm:px-20 px-4'>
        <div className='py-2 px-5 bg-black text-sm font-bold text-white w-fit rounded-3xl'>
            <span>LFC RETAIL</span>
        </div>
        <div className=''>
            <ul className='flex gap-7 border-b border-gray-200 font-bold text-sm'>
                <li><button id='Away' className={`py-4 ${activeSection === 'Away' ? 'border-b-2 border-liverRed': 'opacity-30 hover:opacity-70'}`} onClick={handleClick}>NEW: 24/25 AWAY KIT</button></li>
                <li><button id='Training' className={`py-4 ${activeSection === 'Training' ? 'border-b-2 border-liverRed': 'opacity-30 hover:opacity-70'}`} onClick={handleClick}>NEW: 24/25 TRAINING</button></li>
                <li><button id='Like' className={`py-4 ${activeSection === 'Like' ? 'border-b-2 border-liverRed': 'opacity-30 hover:opacity-70'}`} onClick={handleClick}>YOU MAY LIKE</button></li>
            </ul>
        </div>
        <RetailSection Section={activeSection} />
        <div className='flex justify-center items-center'>
            <button className='flex items-center px-5 pb-4 sm:w-[18%] bg-yellow-300 h-16 font-bold hover:bg-opacity-95 group'>
                VISIT THE LFC STORE NOW
                <img src={arrow} alt="" className='h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
            </button>
        </div>
    </div>
  )
}

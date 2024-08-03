'use client'

import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
          if (window.scrollY > 200) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <nav className={`bg-liverRed px-6 overflow-visible flex items-center justify-between ${scrolled ? 'h-14' : 'h-full' }`}>
        <div className='flex p-3'>
            <img src={scrolled ? 'LFC.svg' : 'liverpoolfc_crest.png'} alt="" className={scrolled ? 'h-14 w-14' : 'h-28 '} />
        </div>
        <div className='flex ml-auto items-center text-white text-sm font-bold font-sans gap-5'>
            <div className='border-r border-gray-400 pr-3'>
                <ul className='flex gap-5'>
                    <li>NEWS</li>
                    <li>FIXTURES & TEAMS</li>
                    <li>TICKETS & BOOKING</li>
                    <li>SHOP</li>
                    <li>VIDEO</li>
                    <li>MORE</li>
                </ul>
            </div>
            <div className='border-r border-gray-400 pr-3'>
                <ul className='flex gap-5'>
                    <li>JOIN</li>
                    <li>LOGIN</li>
                </ul>
            </div>
            <div className='border-r border-gray-400 pr-3'>
                <p>EN</p>
            </div>
            <div>
                <img src="Standard_Chartered.svg" alt="" className='h-7 pr-3' />
            </div>
        </div>
    </nav>
  )
}

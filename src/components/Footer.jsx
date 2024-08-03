import React from 'react'

export default function Footer() {
  return (
    <div className='-mt-10 text-white text-xs'>
        <div className='bg-liverRed px-36 flex justify-between items-center py-20'>
            <img src="Standard_Chartered.svg" alt="" className='h-12' />
            <img src="Nike.svg" alt="" className='h-12' />
            <img src="AXA.svg" alt="" className='h-12' />
            <img src="Expedia.svg" alt="" className='h-8' />
        </div>
        <div className='bg-red-700 py-24 space-y-24'>
            <div className='px-28 flex justify-between items-center'>
                <img src="wasabi.svg" alt="" className='h-10' />
                <img src="wasabi.svg" alt="" className='h-10' />
                <img src="Nivea.svg" alt="" className='h-14' />
                <img src="JAL.svg" alt="" className='h-10' />
                <img src="kodansha.svg" alt="" className='h-5' />
                <img src="strauss.svg" alt="" className='h-12' />
                <img src="Peloton.svg" alt="" className='h-6' />
                <img src="GPixel.svg" alt="" className='h-7' />
            </div>
            <div className='px-48 flex justify-between items-center'>
                <img src="Orion.svg" alt="" className='h-4' />
                <img src="EAS.svg" alt="" className='h-10' />
                <img src="Fury.svg" alt="" className='h-10' />
                <img src="Extreme.svg" alt="" className='h-6' />
                <img src="ups.svg" alt="" className='h-14' />
                <img src="husqvarna.svg" alt="" className='h-12' />
                <img src="Cadbury.svg" alt="" className='h-7' />
            </div>
        </div>
        <div className='bg-red-800 py-10 px-16 space-y-10'>
            <div className='flex'>
                <div className='flex gap-10 font-semibold'>
                    <ul className='space-y-2'>
                        <li>PRIVACY POLICY</li>
                        <li>TERMS AND CONDITIONS</li>
                        <li>ANTI-SLAVERY</li>
                        <li>COOKIES</li>
                        <li>HELP</li>
                    </ul>
                    <ul className='space-y-2'>
                        <li>CONTACT US</li>
                        <li>ACCESSIBILITY</li>
                        <li>COOKIE SETTINGS</li>
                    </ul>
                </div>
                <div className='ml-auto space-y-16 flex flex-col items-end'>
                    <div className='flex gap-3'>
                        <img src="facebook.svg" alt="" className='h-8' />
                        <img src="linkedin.svg" alt="" className='h-8' />
                        <img src="tiktok.svg" alt="" className='h-8' />
                        <img src="instagram.svg" alt="" className='h-8' />
                        <img src="x.svg" alt="" className='h-8' />
                        <img src="youtube.svg" alt="" className='h-8' />
                        <img src="onefootball.svg" alt="" className='h-8' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>DOWNLOAD THE OFFICAL LFC APP</p>
                        <img src="apple.svg" alt="" className='h-10' />
                        <img src="google.svg" alt="" className='h-10' />
                    </div>
                </div>
            </div>
            <hr className='opacity-25' />
            <div className=''>
                <p className='text-red-200 text-center'>© Copyright 2024 The Liverpool Football Club and Athletic Grounds Limited. All rights reserved. Match Statistics supplied by Opta Sports Data Limited. Reproduced under licence from Football DataCo Limited. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

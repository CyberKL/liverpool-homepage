import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='-mt-10 text-white text-xs'>
        <div className='bg-liverRed px-36 flex justify-between items-center py-20'>
            <Link href={''}>
                <img src="Standard_Chartered.svg" alt="" className='h-12' />
            </Link>
            <Link href={''}>
                <img src="Nike.svg" alt="" className='h-12' />
            </Link>
            <Link href={''}>
                <img src="AXA.svg" alt="" className='h-12' />
            </Link>
            <Link href={''}>
                <img src="Expedia.svg" alt="" className='h-8' />
            </Link>
        </div>
        <div className='bg-red-700 py-24 space-y-24'>
            <div className='px-28 flex justify-between items-center'>
                <Link href={''}>
                    <img src="wasabi.svg" alt="" className='h-10' />
                </Link>
                <Link href={''}>
                    <img src="wasabi.svg" alt="" className='h-10' />
                </Link>
                <Link href={''}>
                    <img src="Nivea.svg" alt="" className='h-14' />
                </Link>
                <Link href={''}>
                    <img src="JAL.svg" alt="" className='h-10' />
                </Link>
                <Link href={''}>
                    <img src="kodansha.svg" alt="" className='h-5' />
                </Link>
                <Link href={''}>
                    <img src="strauss.svg" alt="" className='h-12' />
                </Link>
                <Link href={''}>
                    <img src="Peloton.svg" alt="" className='h-6' />
                </Link>
                <Link href={''}>
                    <img src="GPixel.svg" alt="" className='h-7' />
                </Link>
            </div>
            <div className='px-48 flex justify-between items-center'>
                <Link href={''}>
                    <img src="Orion.svg" alt="" className='h-4' />
                </Link>
                <Link href={''}>
                    <img src="EAS.svg" alt="" className='h-10' />
                </Link>
                <Link href={''}>
                    <img src="Fury.svg" alt="" className='h-10' />
                </Link>
                <Link href={''}>
                    <img src="Extreme.svg" alt="" className='h-6' />
                </Link>
                <Link href={''}>
                    <img src="ups.svg" alt="" className='h-14' />
                </Link>
                <Link href={''}>
                    <img src="husqvarna.svg" alt="" className='h-12' />
                </Link>
                <Link href={''}>
                    <img src="Cadbury.svg" alt="" className='h-7' />
                </Link>
            </div>
        </div>
        <div className='bg-red-800 py-10 px-16 space-y-10'>
            <div className='flex'>
                <div className='flex gap-10 font-semibold'>
                    <ul className='space-y-2'>
                        <li><Link href={''}>PRIVACY POLICY</Link></li>
                        <li><Link href={''}>TERMS AND CONDITIONS</Link></li>
                        <li><Link href={''}>ANTI-SLAVERY</Link></li>
                        <li><Link href={''}>COOKIES</Link></li>
                        <li><Link href={''}>HELP</Link></li>
                    </ul>
                    <ul className='space-y-2'>
                        <li><Link href={''}>CONTACT US</Link></li>
                        <li><Link href={''}>ACCESSIBILITY</Link></li>
                        <li><Link href={''}>COOKIE SETTINGS</Link></li>
                    </ul>
                </div>
                <div className='ml-auto space-y-16 flex flex-col items-end'>
                    <div className='flex gap-3'>
                    <Link href={''}>
                        <img src="facebook.svg" alt="Facebook" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="linkedin.svg" alt="LinkedIn" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="tiktok.svg" alt="TikTok" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="instagram.svg" alt="Instagram" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="x.svg" alt="X" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="youtube.svg" alt="YouTube" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    <Link href={''}>
                        <img src="onefootball.svg" alt="OneFootball" className='h-8 filter invert brightness-0 contrast-100' />
                    </Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='font-bold'>DOWNLOAD THE OFFICAL LFC APP</p>
                        <Link href={''}>
                            <img src="apple.svg" alt="" className='h-10' />
                        </Link>
                        <Link href={''}>
                            <img src="google.svg" alt="" className='h-10' />
                        </Link>
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

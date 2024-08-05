import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import StandardChartered from '../../assets/Standard_Chartered.svg';
import Nike from '../../assets/Nike.svg';
import AXA from '../../assets/AXA.svg';
import Expedia from '../../assets/Expedia.svg';
import Wasabi from '../../assets/wasabi.svg';
import Nivea from '../../assets/Nivea.svg';
import JAL from '../../assets/JAL.svg';
import Kodansha from '../../assets/kodansha.svg';
import Strauss from '../../assets/strauss.svg';
import Peloton from '../../assets/Peloton.svg';
import GPixel from '../../assets/GPixel.svg';
import Orion from '../../assets/Orion.svg';
import EAS from '../../assets/EAS.svg';
import Fury from '../../assets/Fury.svg';
import Extreme from '../../assets/Extreme.svg';
import Ups from '../../assets/ups.svg';
import Husqvarna from '../../assets/husqvarna.svg';
import Cadbury from '../../assets/Cadbury.svg';
import Facebook from '../../assets/facebook.svg';
import LinkedIn from '../../assets/linkedin.svg';
import TikTok from '../../assets/tiktok.svg';
import Instagram from '../../assets/instagram.svg';
import X from '../../assets/x.svg';
import YouTube from '../../assets/youtube.svg';
import OneFootball from '../../assets/onefootball.svg';
import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';

export default function Footer() {
  return (
    <div className='-mt-10 text-white text-xs'>
      <div className='bg-liverRed px-36 flex justify-between items-center py-20'>
        <Link to={''}>
          <img src={StandardChartered} alt="Standard Chartered" className='h-12' />
        </Link>
        <Link to={''}>
          <img src={Nike} alt="Nike" className='h-12' />
        </Link>
        <Link to={''}>
          <img src={AXA} alt="AXA" className='h-12' />
        </Link>
        <Link to={''}>
          <img src={Expedia} alt="Expedia" className='h-8' />
        </Link>
      </div>
      <div className='bg-red-700 py-24 space-y-24'>
        <div className='px-28 flex justify-between items-center'>
          <Link to={''}>
            <img src={Wasabi} alt="Wasabi" className='h-10' />
          </Link>
          <Link to={''}>
            <img src={Wasabi} alt="Wasabi" className='h-10' />
          </Link>
          <Link to={''}>
            <img src={Nivea} alt="Nivea" className='h-14' />
          </Link>
          <Link to={''}>
            <img src={JAL} alt="JAL" className='h-10' />
          </Link>
          <Link to={''}>
            <img src={Kodansha} alt="Kodansha" className='h-5' />
          </Link>
          <Link to={''}>
            <img src={Strauss} alt="Strauss" className='h-12' />
          </Link>
          <Link to={''}>
            <img src={Peloton} alt="Peloton" className='h-6' />
          </Link>
          <Link to={''}>
            <img src={GPixel} alt="GPixel" className='h-7' />
          </Link>
        </div>
        <div className='px-48 flex justify-between items-center'>
          <Link to={''}>
            <img src={Orion} alt="Orion" className='h-4' />
          </Link>
          <Link to={''}>
            <img src={EAS} alt="EAS" className='h-10' />
          </Link>
          <Link to={''}>
            <img src={Fury} alt="Fury" className='h-10' />
          </Link>
          <Link to={''}>
            <img src={Extreme} alt="Extreme" className='h-6' />
          </Link>
          <Link to={''}>
            <img src={Ups} alt="UPS" className='h-14' />
          </Link>
          <Link to={''}>
            <img src={Husqvarna} alt="Husqvarna" className='h-12' />
          </Link>
          <Link to={''}>
            <img src={Cadbury} alt="Cadbury" className='h-7' />
          </Link>
        </div>
      </div>
      <div className='bg-red-800 py-10 px-16 space-y-10'>
        <div className='flex'>
          <div className='flex gap-10 font-semibold'>
            <ul className='space-y-2'>
              <li><Link to={''}>PRIVACY POLICY</Link></li>
              <li><Link to={''}>TERMS AND CONDITIONS</Link></li>
              <li><Link to={''}>ANTI-SLAVERY</Link></li>
              <li><Link to={''}>COOKIES</Link></li>
              <li><Link to={''}>HELP</Link></li>
            </ul>
            <ul className='space-y-2'>
              <li><Link to={''}>CONTACT US</Link></li>
              <li><Link to={''}>ACCESSIBILITY</Link></li>
              <li><Link to={''}>COOKIE SETTINGS</Link></li>
            </ul>
          </div>
          <div className='ml-auto space-y-16 flex flex-col items-end'>
            <div className='flex gap-3'>
              <Link to={''}>
                <img src={Facebook} alt="Facebook" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={LinkedIn} alt="LinkedIn" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={TikTok} alt="TikTok" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={Instagram} alt="Instagram" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={X} alt="X" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={YouTube} alt="YouTube" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
              <Link to={''}>
                <img src={OneFootball} alt="OneFootball" className='h-8 filter invert brightness-0 contrast-100' />
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <p className='font-bold'>DOWNLOAD THE OFFICIAL LFC APP</p>
              <Link to={''}>
                <img src={Apple} alt="Apple" className='h-10' />
              </Link>
              <Link to={''}>
                <img src={Google} alt="Google" className='h-10' />
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
  );
}

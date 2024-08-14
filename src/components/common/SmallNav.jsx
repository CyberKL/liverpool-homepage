import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SmallMenu from './SmallMenu'

import lfc from '../../assets/LFC.svg'
import standardChartered from '../../assets/Standard_Chartered.svg'
import arrow from "../../assets/arrow.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import tiktok from "../../assets/tiktok.svg";
import instagram from "../../assets/instagram.svg";
import x from "../../assets/x.svg";
import youtube from "../../assets/youtube.svg";
import onefootball from "../../assets/onefootball.svg";

export default function SmallNav() {
    const [overlay, setOverlay] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [subMenuVisible, setSubMenuVisible] = useState(false);
    const [section, setSection] = useState('');
    const [langMenuVisible, setLangMenuVisible] = useState(false);

    useEffect(() => {
        if (menuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        // Cleanup to ensure that overflow is reset when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuVisible]);

    const handleClick = (e) => {
        const id = e.target.textContent
        setSubMenuVisible(true);
        setSection(id)
    }
    

  return (
    <div className='relative'>
            <div className='relative'>
                {menuVisible && (<div className="fixed inset-0 bg-gray-800 bg-opacity-30 z-10" />)}
                <div id='drawer' className={`fixed h-full sm:w-96 w-screen left-0 top-0 bg-white z-20 px-5 overflow-y-auto pb-[60px] transform transition-transform duration-300 ${menuVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex items-center justify-between text-liverRed pt-7 pb-3 border-b border-gray-600'>
                        <svg className='h-7' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 59 26"><path  d="M5.705 22.344V5.916c0-1.694-.272-4.483 1.708-5.2V.603H0v.115c1.98.715 1.746 3.465 1.746 5.199V20.12c0 1.697.233 4.484-1.746 5.162v.114h15.952l2.02-5.012h-.118c-1.94 1.583-4.231 2.448-6.869 2.3l-5.28-.341v.001zm19.564-9.045h2.872c1.204 0 2.834-.075 3.456 1.054h.117v-3.99h-.117c-.465.227-1.09.227-1.67.227h-4.658V3.58c1.244-.228 2.6-.266 3.961-.266 1.784 0 3.376.152 4.58 1.473h.116V.414h-.117c-.505.265-1.166.188-1.825.188H19.561v.115c1.983.715 1.749 3.465 1.749 5.199V20.12c0 1.697.234 4.484-1.749 5.162v.114h7.337v-.114c-1.938-.716-1.63-3.466-1.63-5.16v-6.823zM56.523.94C54.23.414 51.823 0 49.457 0 41.499 0 35.83 5.162 35.83 12.96 35.831 21.026 41.5 26 50.66 26c2.019 0 4.037-.303 5.864-1.133l1.977-4.37h-.116c-2.446 1.359-5.358 2.373-8.268 2.373-5.978 0-9.86-4.935-9.86-10.474 0-5.462 3.727-9.267 9.083-9.267 2.563 0 5.046.828 7.184 2.146V.94z"></path></svg>
                        <button onClick={() => setMenuVisible(false)}>
                            <svg className='h-4' viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.636L13.636 0l1.363 1.364L1.364 15 0 13.636z"></path><path d="M1.364 0l13.635 13.636-1.363 1.363L0 1.364 1.364 0z"></path></svg>
                        </button>
                    </div>
                    <div className='space-y-[30px]'>
                        {!subMenuVisible && !langMenuVisible && (
                            <div className='space-y-[30px]'>
                                <button
                                    className="flex items-center justify-between font-bold w-full py-7 border-b border-gray-300 text-sm text-gray-600"
                                    onClick={() => setLangMenuVisible(true)}
                                >
                                    <div className="flex items-center gap-2">
                                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-4"><path d="M8 16C6.90667 16 5.87333 15.79 4.9 15.37C3.92667 14.95 3.07667 14.3767 2.35 13.65C1.62333 12.9233 1.05 12.0733 0.63 11.1C0.21 10.1267 0 9.09333 0 8C0 6.89333 0.21 5.85667 0.63 4.89C1.05 3.92333 1.62333 3.07667 2.35 2.35C3.07667 1.62333 3.92667 1.05 4.9 0.63C5.87333 0.21 6.90667 0 8 0C9.10667 0 10.1433 0.21 11.11 0.63C12.0767 1.05 12.9233 1.62333 13.65 2.35C14.3767 3.07667 14.95 3.92333 15.37 4.89C15.79 5.85667 16 6.89333 16 8C16 9.09333 15.79 10.1267 15.37 11.1C14.95 12.0733 14.3767 12.9233 13.65 13.65C12.9233 14.3767 12.0767 14.95 11.11 15.37C10.1433 15.79 9.10667 16 8 16ZM8 14.36C8.34667 13.88 8.64667 13.38 8.9 12.86C9.15333 12.34 9.36 11.7867 9.52 11.2H6.48C6.64 11.7867 6.84667 12.34 7.1 12.86C7.35333 13.38 7.65333 13.88 8 14.36ZM5.92 14.04C5.68 13.6 5.47 13.1433 5.29 12.67C5.11 12.1967 4.96 11.7067 4.84 11.2H2.48C2.86667 11.8667 3.35 12.4467 3.93 12.94C4.51 13.4333 5.17333 13.8 5.92 14.04ZM10.08 14.04C10.8267 13.8 11.49 13.4333 12.07 12.94C12.65 12.4467 13.1333 11.8667 13.52 11.2H11.16C11.04 11.7067 10.89 12.1967 10.71 12.67C10.53 13.1433 10.32 13.6 10.08 14.04ZM1.8 9.6H4.52C4.48 9.33333 4.45 9.07 4.43 8.81C4.41 8.55 4.4 8.28 4.4 8C4.4 7.72 4.41 7.45 4.43 7.19C4.45 6.93 4.48 6.66667 4.52 6.4H1.8C1.73333 6.66667 1.68333 6.93 1.65 7.19C1.61667 7.45 1.6 7.72 1.6 8C1.6 8.28 1.61667 8.55 1.65 8.81C1.68333 9.07 1.73333 9.33333 1.8 9.6ZM6.12 9.6H9.88C9.92 9.33333 9.95 9.07 9.97 8.81C9.99 8.55 10 8.28 10 8C10 7.72 9.99 7.45 9.97 7.19C9.95 6.93 9.92 6.66667 9.88 6.4H6.12C6.08 6.66667 6.05 6.93 6.03 7.19C6.01 7.45 6 7.72 6 8C6 8.28 6.01 8.55 6.03 8.81C6.05 9.07 6.08 9.33333 6.12 9.6ZM11.48 9.6H14.2C14.2667 9.33333 14.3167 9.07 14.35 8.81C14.3833 8.55 14.4 8.28 14.4 8C14.4 7.72 14.3833 7.45 14.35 7.19C14.3167 6.93 14.2667 6.66667 14.2 6.4H11.48C11.52 6.66667 11.55 6.93 11.57 7.19C11.59 7.45 11.6 7.72 11.6 8C11.6 8.28 11.59 8.55 11.57 8.81C11.55 9.07 11.52 9.33333 11.48 9.6ZM11.16 4.8H13.52C13.1333 4.13333 12.65 3.55333 12.07 3.06C11.49 2.56667 10.8267 2.2 10.08 1.96C10.32 2.4 10.53 2.85667 10.71 3.33C10.89 3.80333 11.04 4.29333 11.16 4.8ZM6.48 4.8H9.52C9.36 4.21333 9.15333 3.66 8.9 3.14C8.64667 2.62 8.34667 2.12 8 1.64C7.65333 2.12 7.35333 2.62 7.1 3.14C6.84667 3.66 6.64 4.21333 6.48 4.8ZM2.48 4.8H4.84C4.96 4.29333 5.11 3.80333 5.29 3.33C5.47 2.85667 5.68 2.4 5.92 1.96C5.17333 2.2 4.51 2.56667 3.93 3.06C3.35 3.55333 2.86667 4.13333 2.48 4.8Z"></path></svg>
                                        <p>EN</p>
                                    </div>
                                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                </button>
                                
                                <ul className='font-bold'>
                                    <li>
                                        <div className='py-[15px] px-[5px] text-red-600 uppercase'><Link to={'/'}>Home</Link></div>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            News
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            Fixtures & Teams
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            Tickets & Booking
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            Shop
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            Video
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={handleClick} className='py-[15px] px-[5px] flex justify-between text-gray-600 uppercase items-center w-full'>
                                            More
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-4'><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {subMenuVisible && (
                            <SmallMenu Section={section} setSubMenuVisible={setSubMenuVisible} />
                        )}
                        {langMenuVisible && (
                            <div className='space-y-[30px] text-gray-600 font-bold text-sm'>
                                <button className="uppercase flex items-center font-bold text-sm py-[15px] text-gray-600" onClick={() => setLangMenuVisible(false)}>
                                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 rotate-180"><path d="M5 3l5 5-5 5" stroke="currentColor" strokeWidth="2"></path></svg>
                                    back
                                </button>
                                <ul>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>deutsch</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>english</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>Español</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>Française</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>bahasa Indonesia</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>Italiano</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>日本語</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>Português</Link>
                                    </li>
                                    <li className='py-[15px]'>
                                        <Link to={''} className='hover:text-red-600 uppercase'>แบบไทย</Link>
                                    </li>
                                </ul>

                            </div>
                        )}

                        <div>
                            <div className="bg-liverRed text-white space-y-8 py-6 px-4 h-min text-wrap">
                                <div className="space-y-5">
                                    <h2 className="font-bold  text-sm">
                                    JOIN MYLFC, YOUR FREE, OFFICIAL LFC ACCOUNT
                                    </h2>
                                    <p className="text-wrap text-lg leading-6">
                                    Unlock new, exciting and exclusive benefits including videos,
                                    match commentary, emagazine and more, all in one place.
                                    </p>
                                </div>
                                <div>
                                    <Link to={'/join'}>
                                        <div className="flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60">
                                            REGISTER NOW
                                            <img src={arrow} alt="" className="filter invert h-4" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <span className='text-gray-600 font-bold'>Already registered? <Link to={'/login'} className='font-normal'>Log in here</Link></span>
                            </div>
                        </div>

                        <div className="py-5 border-t border-gray-300">
                            <div className="ml-auto flex gap-3">
                                <Link to={""}>
                                    <img src={facebook} alt="Facebook" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={linkedin} alt="LinkedIn" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={tiktok} alt="TikTok" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={instagram} alt="Instagram" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={x} alt="X" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={youtube} alt="YouTube" className="h-8" />
                                </Link>
                                <Link to={""}>
                                    <img src={onefootball} alt="OneFootball" className="h-8" />
                                </Link>
                            </div>
                            <div className='mt-5'>
                                <ul className="grid grid-cols-12 text-sm">
                                    <li className="font-bold col-span-full sm:col-span-3 w-fit">HELP</li>
                                    <li className='col-span-full sm:col-span-3 w-fit'>Help & FAQs</li>
                                    <li className='col-span-full sm:col-span-3 w-fit'>Contact</li>
                                    <li className='col-span-full sm:col-span-3 w-fit'>A - Z</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        <div>
            <nav className='flex justify-between bg-liverRed p-3'>

                <button onClick={() => setMenuVisible(!menuVisible)}>
                    <svg className='h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14"><path fill="#fff" d="M0 0h20v2H0V0zM0 12h20v2H0v-2zM0 6h20v2H0V6z"></path></svg>
                </button>
                
                <Link to={'/'}>
                    <img src={lfc} alt="" className='h-7' />
                </Link>

                <img src={standardChartered} alt="" className='h-7' />

            </nav>
        </div>
    </div>
  )
}

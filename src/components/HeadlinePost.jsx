import React from 'react'

export default function HeadlinePost({Image='lfc-diary-010824.webp', dark=false, title='TOUR', text='USA diary: Sightseeing, training with a difference and a debate about ironing', time=new Date('2024-08-01T03:24:00')}) {
    const difference = Date.now() - time;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let elapsedTime;
    if (days > 0) {
        elapsedTime = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        elapsedTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        elapsedTime = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        elapsedTime = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  
    return (
    <div className='px-3 hover:bg-black hover:bg-opacity-10 transition ease-in duration-200'>
        <div className='border-b border-gray-400 py-5 space-y-5 '>
            <div>
                <img src={Image} alt="" className='' />
            </div>
            <div className={dark ? 'text-black' : 'text-white'}>
                <time datetime={time}>
                    <span className={`text-xs ${dark ? 'text-gray-600' : 'text-pink-200'}`}>{elapsedTime}</span>
                </time>
                <h2 className='space-x-2'>
                    <span className='font-bold'>{title}</span>
                    <span>{text}</span>
                </h2>
            </div>
        </div>
    </div>
  )
}

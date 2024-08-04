import React from 'react'

export default function LangMenu() {
  return (
    <div className='bg-white space-y-3 px-5 py-6 w-[20rem] text-sm'>
        <p className='font-bold px-2'>SELECT YOUR LANGUAGE</p>
        <div className='flex gap-5 text-gray-600 font-bold'>
            <ul className='space-y-2 w-full'>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>DEUTSCH</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>ENGLISH</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>ESPAÑOL</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>FRANÇAISE</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>BAHASA INDONESIA</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>ITALIANO</li>
            </ul>
            <ul className='space-y-2 w-8/12'>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>日本語</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>PORTUGUÊS</li>
                <li className='py-3 px-2 hover:bg-black hover:bg-opacity-5 w-full'>แบบไทย</li>
            </ul>
        </div>
    </div>
  )
}

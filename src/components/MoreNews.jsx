import React from 'react'

export default function MoreNews() {
  return (
    <div className=''>
        <div className='flex flex-col items-center w-full'>
            <div className='space-y-8'>
                <div className='py-2 px-5 bg-black text-xs font-bold text-white w-fit rounded-3xl'>
                    <span>MORE NEWS</span>
                </div>
                <div className='space-y-10 hover:bg-black hover:bg-opacity-10 transition ease-in duration-200 w-[50rem] p-3'>
                    <div>
                        <h3 className='flex gap-2 text-4xl text-wrap items-center'>
                            <span className='text-lg font-bold'>TOUR</span>
                            USA diary: Sightseeing, training with a difference and a debate about ironing
                        </h3>
                        <span className='text-xs'>16 HOURS AGO</span>
                    </div>
                    <div>
                        <img src="lfc-diary-010824.webp" alt="" className='w-[50rem]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full bg-[url(/open_office.jpg)] bg-cover bg-norepeat bg-center'>
        <div className='text-white w-full h-full bg-[rgba(0,0,0,0.3)] flex flex-col px-10 py-24'>
            <p className="uppercase text-xs text-gray-200 ">Your ultimate holiday haven in Maldevis</p>
            <p className="text-5xl w-22 text-gray-200 tracking-wide capitalize  mb-8 mt-4">Experince the real Maldevis</p>
            <Link href="/signup" className='border-2 border-gray-200 rounded w-max mt-4 sm:mt-0 px-4 py-1'>Contact Us Today</Link>
        </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Newsletter() {
  return (
    <div className='w-full bg-[url(/open_office.jpg)] bg-cover bg-norepeat bg-center'>
        <div className='text-white w-full py-12 h-full bg-[rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center sm:justify-between px-10'>
            <span className='text-3xl text-center sm:text-left md:text-4xl font-bold text-white space-y-4'>Subscribe to our newsletter</span>
            <Link href="/signup" className='btn-cta mt-4 sm:mt-0'>Sign Up</Link>
        </div>
    </div>
  )
}

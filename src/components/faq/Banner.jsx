import React from 'react'
import { FaRegCircleXmark } from 'react-icons/fa6'

export default function Banner() {
  return (
    <div className='my-8 py-6 px-8 bg-slate-50 border border-gray-300'>
        <h2>How to Join AASTU?</h2>
        <div className='flex items-strat justify-between gap-6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid saepe obcaecati officiis blanditiis ab ratione. Dolore possimus maiores dolores aliquam totam dolorum! Cum quisquam corrupti magnam nesciunt non odio.</p>
            <FaRegCircleXmark className='flex min-w-6 min-h-6 sm:min-w-10 sm:min-h-10  text-red-500 cursor-pointer' />
        </div>
    </div>
  )
}

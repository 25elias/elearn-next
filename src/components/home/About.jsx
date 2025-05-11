import Image from 'next/image'
import Link from 'next/link'

const Abouts = () => {
  return (
    <div className='max-w-6xl mx-auto px-10 w-full h-full py-12 flex flex-col items-center sm:flex-row md:justify-between gap-8'>

      <div className='w-full h-full text-center space-y-8 p-8'>
        <h2 className='text-3xl font-bold'>About Us</h2>
        <p className='text-gray-700 text-wrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nemo nihil, ab magnam rem incidunt nobis est autem eaque eos dolore optio maiores necessitatibus accusantium sequi quis deserunt animi labore!</p>
        <p className='text-gray-700 text-wrap'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nemo nihil, ab magnam rem incidunt nobis est autem eaque eos dolore optio maiores necessitatibus accusantium sequi quis deserunt animi labore!</p>
        <Link href='/courses' className='btn-cta'>Learn More</Link>
      </div>
      <div className='w-full h-full'>
        <Image 
          src='/about.png'
          alt='About image'
          width={300}
          height={400}
          className='w-full min-h-full'
        />
      </div>
    </div>
  )
}

export default Abouts;
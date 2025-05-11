import Image from 'next/image'

const Goal = () => {
  return (
    <div className='w-full h-full  bg-gray-100'>
        <div className='wrapper flex flex-col items-center sm:flex-row md:justify-between gap-8 px-8 py-12 '>
            <div className='w-full h-full'>
                <Image 
                src='/post-2.jpg'
                alt='Mission &amp; Goals'
                width={300}
                height={400}

                className='w-full min-h-full'
                />
            </div>
            <div className='w-full h-full text-center space-y-8 p-8'>
            <h2 className='text-3xl font-bold'>Our Mission &amp; Goals</h2>
            <p className='text-gray-700 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In modi delectus sit natus totam corporis qui officiis, magni placeat ullam enim, maiores deleniti aut optio fugit cum earum quo animi?</p>
            <p className='text-gray-700 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ea explicabo aliquid perspiciatis corrupti exercitationem est beatae consectetur reiciendis. Quisquam voluptatibus, corrupti ullam dolore quo esse deleniti quaerat voluptate? Consequuntur?</p>
            </div>
        </div>

    </div>
  )
}

export default Goal;
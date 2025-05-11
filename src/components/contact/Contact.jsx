import React from 'react'

const ContactForm = () => {
  return(
    <div className='max-w-6xl max-h-max  mx-auto px-8  flex flex-col sm:flex-row gap-8'>
      <div className='flex flex-col w-full'>
        <h2 className='text-gray-500 mb-2'>How can we help you?</h2>
        <div className='w-full flex flex-col gap-8'>
          <div className='flex w-full gap-4'>
            <div className='w-[120px] w-[150px]'>
              <img src="/profile-1.jpg" alt="" className='w-full h-full'/>
            </div>
            <div className='w-full flex flex-col  gap-1 text-sm text-gray-600'>
              <h3>Flelix Edesa</h3>
              <p>Customer Relations</p>
              <p>+251 90 000 0001</p>
              <p>example@gmail.com</p>

            </div>
          </div>
          <div className='flex w-full gap-4'>
            <div className='w-[120px] w-[150px]'>
              <img src="/man_dp1.jpg" alt="" className='w-full h-full'/>
            </div>
            <div className='w-full flex flex-col  gap-1 text-sm text-gray-600'>
              <h3>Darwin Nunez</h3>
              <p>Customer Relations</p>
              <p>+251 90 000 0002</p>
              <p>example@gmail.com</p>

            </div>
          </div>

        </div>
      </div>


    <div className='w-full mt-20'>
      <form className='w-full flex flex-col gap-4 text-sm'>
        <input type="text" name="name" 
        id="name" 
        placeholder='Enter your full name'
        required
        className='contact-form_input' />
        <input type="text" name="email" 
        id="email" 
        placeholder='example@email.com*'
        required 
        className='
        contact-form_input placeholder:font-bold'/>
        <input type="text-area" name="subject" 
        id="subject" 
        placeholder='Your Subject' 
        className='contact-form_input' />
        <input type="text" name="message" 
        id="message" 
        placeholder='Leave us a message'
        className='contact-form_input mb-4 ' />

        <button className='w-full btn-cta uppercase mt-8 tracking-wide' >
          Send Messages
        </button>
      </form>
    </div>
    </div>
  )
};


const ContactPage = () => {
  return (
    <div>
      <div className="bg-slate-100 py-32 text-center">
        <h1 className="text-4xl text-gray-900 font-semibold tracking-widest pt-8 pb-4">
          Contact Us
        </h1>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
};

export default ContactPage;
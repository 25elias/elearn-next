
const FaqForm = () => {
  return(
    <div className='w-full sm:w-2/3 sm:mx-auto py-10'>
        <h2 className="text-center my-8">Your Question</h2>
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

        <button type="submit" className='w-max flex items-end justify-center btn-cta uppercase mt-8 tracking-wide cursor-pointer' >
          Send Messages
        </button>
      </form>
    </div>
  )
};
export default FaqForm;
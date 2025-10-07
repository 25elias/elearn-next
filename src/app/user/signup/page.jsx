
const Signup = () => {
  return (
    <div className="flex max-w-3xl m-auto mt-8 border rounded-3xl shadow-lg">
      <div className="w-[550px] h-[560px] hidden sm:block rounded-l-3xl overflow-hidden">
        <img  src="/about.png" alt="Sign Up" 
        className="w-full h-full overflow-hidden"/>
      </div>
      <div className="w-full h-full px-8 my-auto space-y-6">
        <p className="text-xl text-gray-800 font-[500] text-center ">Create an account</p>
        <div>
          <form className='w-full flex flex-col text-sm'>
            {/* input fields */}
            <div>
              <input type="email" name="email" 
                id="email" 
                placeholder='example@email.com*'
                required
                className='contact-form_input placeholder:font-[400]' />
              <input type="password" name="password" 
                id="password" 
                placeholder='Create a Password'
                required 
                className='
                contact-form_input placeholder:font-[400]'/>
              <input type="phone" name="number" 
              id="number" 
              placeholder='Phone Number'
              required 
              className='
              contact-form_input placeholder:font-[400]'/>
            </div>

            <div className="flex flex-col ">
              <buton className="mb-2">
                <input type="radio" name="" id="" />
                <span className="ml-2 text-sm text-gray-800 font-normal">I only want to book</span>
              </buton>
              <buton className="mb-2">
                <input type="radio" name="" id="" />
                <span className="ml-2 text-sm text-gray-800 font-normal">I want to rent property</span>
              </buton>
            </div>
            <button type="submit" className='w-full flex items-end justify-center btn-cta rounded-md uppercase mt-4 tracking-wide cursor-pointer' >
              Sign Up
            </button>
            <span className="text-gray-600 mt-2">
              already have an account? <a href="/user/signin" className="text-slate-600 hover:underline ">signin</a>
            </span>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Signup;
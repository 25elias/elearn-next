
const Signin = () => {
  return (
    <div className="flex max-w-2xl m-auto mt-8 border border-gray-300 rounded-3xl shadow-5xl">
      <div className="w-[550px] h-[560px] hidden sm:block rounded-l-3xl overflow-hidden">
        <img  src="/about.png" alt="Sign in" 
        className="w-full h-full overflow-hidden"/>
      </div>
      <div className="w-full h-full px-8 my-auto space-y-6">
        <p className="text-xl text-gray-800 font-[500] text-center ">Sign In</p>
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
                placeholder='Enter your password'
                required 
                className="
                contact-form_input placeholder:font-[400]"/>
            </div>
            <button type="submit" className='w-full flex items-end justify-center btn-cta rounded-md uppercase mt-4 tracking-wide cursor-pointer' >
              Login
            </button>
            <span className="text-sm text-gray-900 font-bold text-center mt-4">
              <a href="/user/signin" className="hover:underline hover:underline-gray-800">Don't have an account?</a> | <a href="/user/signin" className="hover:underline " >Forgot Password</a>
            </span>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Signin;
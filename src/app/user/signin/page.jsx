
const Signin = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <div className="w-full hidden sm:block">
        <img  src="/about.png" alt="Sign Up" 
        className="w-full h-full"/>
      </div>
      <div className="w-full h-full px-8 my-auto space-y-6">
        <h2>Sign In and Connect to AASTU</h2>
        <p className="text-gray">Lorem adipisicing elit. Illum modi accusantium nam in consequuntur est blanditiis natus voluptate quis neque ad, sequi saepe, </p>
        <div>
          <form className='w-full flex flex-col gap-4 text-sm'>
            <input type="email" name="email" 
            id="email" 
            placeholder='example@email.com*'
            required
            className='contact-form_input placeholder:font-bold' />
            <input type="password" name="password" 
            id="password" 
            placeholder='Enter a Password'
            required 
            className='
            contact-form_input placeholder:font-bold'/>
            <buton>
              <input type="checkbox" name="" id="" />
              <span className="ml-2">Show password</span>
            </buton>
            <select className="border border-gray-300 py-2 px-4 outline-none">
              <option value="">I am A Student</option>
              <option value="">I am A Teacher</option>
            </select>
            <span className="text-gray">
              don't have an account? <a href="/user/signup" className="text-slate-600 hover:underline ">signup</a>
            </span>
            <button type="submit" className='w-max flex items-end justify-center btn-cta uppercase mt-8 tracking-wide cursor-pointer' >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
    );
}

export default Signin;
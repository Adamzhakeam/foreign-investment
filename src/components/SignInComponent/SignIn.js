import React from 'react'
import "./SignIn.css"
import Logo from '../logo/Logo'
import SignInForm from '../siginform/SignInForm'
function SignIn() {
  return (
    <div>
        <Logo/>
        {/* <div className='capitalize border-2 border-black my-2 text-center'>          
          <p className='text-2xl'>welcome back</p>
          <p>please enter your details to sign in</p>
        </div>
        
        <div className='h-24 grid grid-cols-3 gap-2  content-evenly  place-content-center' >
          <p className='border-2 border-black rounded-lg px-3 py-1'>google button</p>
          <p className='border-2 border-black rounded-lg px-3 py-1'>twitter button</p>
          <p className='border-2 border-black rounded-lg px-3 py-1'>apple button</p>
        </div> */}

      {/* <div className='flex items-center mt-1'>
        <hr className='w-[48%] h-1 bg-black'></hr>
        <p className='mx-2'>or</p>
        <hr className='w-[48%] h-1 bg-black'></hr>
      </div> */}
      <SignInForm/>
    </div>
  )
}

export default SignIn
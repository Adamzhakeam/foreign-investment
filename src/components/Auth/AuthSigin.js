import React from 'react'
import SignIn from '../SignInComponent/SignIn'
function AuthSigin() {
  return (
    <div className='flex justify-center font-Finlandica  my-10t'>
        <div className='lg:w-[33%] flex justify-center rounded-xl bg-white'>
            <div className='lg:w-[90%]'>
                <SignIn/>
            </div>
        </div>
    </div>
  )
}

export default AuthSigin
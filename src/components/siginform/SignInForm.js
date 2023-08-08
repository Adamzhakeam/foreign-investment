import React from 'react'
function SignInForm(){
    return(
       <form className='justify-center mt-1'>
        <div className='block my-2'>
            <p className='text-xl'>E-mail Address</p>
            <input type='email' value="" placeholder='type email here'
             className='border-2 w-[100%] p-2 rounded-lg'/>
        </div>
        <div className='block my-2'>
            <p className='text-xl'>Password</p>
            <input type="password" value="" placeholder='password' 
             className='border-2 w-[100%] p-2 rounded-lg'/>
        </div>
        <div className='flex justify-between my-2'>
            <div>
                <input type='checkbox' class='defaultring'/>
                <label className=''>Remember Me</label>
            </div>
           
        </div>

        <div className='place-self-center my-4'>
            <button className='bg-black rounded-md p-2 text-white  border-2 w-[100%] h-70%'  >SignIn</button>
        </div>
         <div className='justify-left mt-2'>
        <p className='capitalize underline content-between padding-bottom m-5 justify-left '>forgot password?</p>
        </div>
        
        
       </form>
    )
}
export default SignInForm
import React, { useState } from 'react'

const LoginPage = () => {
    
    const [isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/4 bg-black rounded-lg mx-auto p-5 bg-opacity-80'>
            <h1 className='text-white p-3 mb-3 text-4xl'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
            {
                !isSignInForm && 
                <div className='mb-8 mx-auto'>
                    <input 
                        type="text" 
                        placeholder='enter name' 
                        className='py-2 rounded-lg px-2 outline-none w-[96%] mx-auto'/>
                </div>
            }
            <div className='mb-8 mx-auto'>
                <input 
                    type="email" 
                    placeholder='enter email' 
                    className='py-2 rounded-lg px-2 outline-none w-[96%] mx-auto'/>
            </div>
            <div className='mb-8 mx-auto'>
                <input 
                    type="password" 
                    placeholder='enter password' 
                    className='py-2 px-2 rounded-lg outline-none w-[96%]'/>
            </div>
            <div>
                <button className='w-[96%] bg-red-700 rounded-lg outline-none py-2 px-4'>submit</button>
            </div>
            <div>
                <p onClick={toggleSignInForm} className='text-white p-3 mb-3 cursor-pointer mt-3'>{isSignInForm ? "new to movies app SignUp now" : "already user exists"}</p>
            </div>
        </form>
    </div>
  )
}

export default LoginPage
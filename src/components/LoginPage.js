import React, { useRef, useState } from 'react'
import { checkValidation } from '../utils/checkValidation'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleValidation = () => {
        const validatedMessage = checkValidation(email.current.value,password.current.value)
        setErrorMessage(validatedMessage)

        if(validatedMessage) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    // dispatch(addUser({uid: uid,email: email,displayName: displayName}));
                    // navigate("/browse")
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+ "-" + errorMessage)
              });
            }
        
        else {
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const { uid, email, displayName } = userCredential.user;
                // dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                // navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    } 

  return (
    <div className='relative'>
        <form 
            onSubmit={(e)=>e.preventDefault()} 
            className='w-2/4 bg-black absolute left-40 top-20 rounded-lg mx-auto p-2 bg-opacity-80
                md:left-52 pl-5
                lg:w-1/3 lg:left-80
                xl:left-[420px]
                2xl:left-[550px] 2xl:top-40 pt-5 2xl:w-1/4
            '
            >
            <h1 className='text-white p-3 mb-3 text-4xl'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
            {
                !isSignInForm && 
                <div className='mb-8 mx-auto'>
                    <input 
                        type="text" 
                        placeholder='enter name' 
                        className='py-2 rounded-lg px-2 outline-none w-[96%] mx-auto'
                        ref={name}
                    />
                </div>
            }
            <div className='mb-8 mx-auto'>
                <input 
                    type="email" 
                    placeholder='enter email' 
                    className='py-2 rounded-lg px-2 outline-none w-[96%] mx-auto'
                    ref={email}
                />
            </div>
            <div className='mb-8 mx-auto'>
                <input 
                    type="password" 
                    placeholder='enter password' 
                    className='py-2 px-2 rounded-lg outline-none w-[96%]'
                    ref={password}    
                />
            </div>
           <div className='mb-2'>
                 {
                    errorMessage && <span className='text-red-700 mb-5'>{errorMessage}</span>
                 }
           </div>
            <div>
                <button onClick={handleValidation} className='w-[96%] bg-red-700 rounded-lg outline-none py-2 px-4'>submit</button>
            </div>
            <div>
                <p onClick={toggleSignInForm} className='text-white cursor-pointer mt-3 md:p-2 2xl:mb-3'>{isSignInForm ? "new to movies app SignUp now" : "already a user signin now"}</p>
            </div>
        </form>
    </div>
  )
}

export default LoginPage;
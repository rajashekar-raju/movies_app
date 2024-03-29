import React, { useEffect } from 'react'
import Header from './Header'
import LoginPage from './LoginPage'
import backgroundImage from './images/background.jpeg'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(process.env.REACT_APP_GPT_KEY)
  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },[])

  return (
    <div className='w-screen'>
        <img src={backgroundImage} alt="backgroundIMage" className='absolute -z-10 w-full h-full' />
        <Header/>
        <LoginPage/>
    </div>
  )
}

export default Body;
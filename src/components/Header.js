import React from 'react'
import movie_icon from './images/movie_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { removeUser } from '../utils/userSlice'

const Header = () => {
  
  const user = useSelector((store)=>store.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
         signOut(auth).then(() => {
          dispatch(removeUser())        
          navigate("/");
        }).catch((error) => {
       console.log(error)
    });
  }

  return (
    <div className='absolute z-20'>
      <div className='px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center'>
          <img src={movie_icon} alt="movie_icon" className='w-24 bg-white' />
          <div>
              {
                user && <button onClick={handleSignOut} className='bg-red-700 px-4 py-2 outline-none rounded-lg'>SignOut</button>
              }
          </div>
      </div>
    </div>
  )
}

export default Header
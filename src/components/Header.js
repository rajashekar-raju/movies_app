import React, { useState } from 'react'
import movie_icon from './images/movie_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { removeUser } from '../utils/userSlice'
import { toggleMovieState } from '../utils/chatGptMovies'

const Header = () => {
  
  // const user = useSelector((store)=>store.user)

  // const movieState = useSelector((store)=>store.gptMovies?.movieState)
  
  // const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const handleSignOut = () => {
  //        signOut(auth).then(() => {
  //         dispatch(removeUser())        
  //         navigate("/");
  //       }).catch((error) => {
  //      console.log(error)
  //   });
  // }

  // const movetoChatgptPage = () => {
  //     dispatch(toggleMovieState())
  // }

  // const moveToBrowsePage = () => {
  //   dispatch(toggleMovieState())
  // }

  // return ( 
  //   <div className='absolute z-20'>
  //     <div className='px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center'>
  //         <img src={movie_icon} alt="movie_icon" className='w-10 bg-white rounded-lg lg:w-14' />
  //         <div>
  //             {
  //               user && <>
  //               {
  //                 movieState ? 
  //                 <Link to="/chatGpt" onClick={moveToBrowsePage} className='text-white m-2 underline'>dont know what to watch use chatGpt</Link>
  //                 : 
  //                 <Link to="/browse" onClick={movetoChatgptPage} className='text-white m-2 underline'>back to homePage</Link> 
                  
  //               }
  //               <button onClick={handleSignOut} 
  //                 className='bg-red-700 px-3 text-xs py-2 outline-none rounded-lg lg:px-4 lg:py-2 lg:text-sm'                    
  //                 >
  //                   SignOut
  //               </button>
  //               </>
  //             }
  //         </div>
  //     </div>
  //   </div>
  // )

  const [showGptPage,setgptPage] = useState(false)

  const handleChatGptPage = () => {
    setgptPage(true)
  }

  const handleHomePage = () => {
    setgptPage(false)
  }

  return (
    <div className="absolute z-20">
        <div className="px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
            <img src={movie_icon} alt="movie_icon" className="w-10 bg-white rounded-lg lg:w-14" />
            {!showGptPage ? (
                <Link className="text-white" to="/chatGpt" onClick={handleChatGptPage}>
                    Don't know what to watch? Use ChatGPT
                </Link>
            ) : (
                <Link to="/" className="text-white" onClick={handleHomePage}>
                    Back to Homepage
                </Link>
            )}
        </div>
    </div>
);
}

export default Header;
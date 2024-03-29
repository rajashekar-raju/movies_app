import React from 'react'
import ChatGptSearchBar from './ChatGptSearchBar'
import backgroundImage from '../components/images/background.jpeg'
import ChatGptMovieList from './ChatGptMovieList'

const ChatGptPage = () => {
  return (
    <div className=''>
        <img src={backgroundImage} alt="backgroundImage" className='fixed -z-10'/>
        <ChatGptSearchBar/>
        <ChatGptMovieList/>
    </div>
  )
}

export default ChatGptPage
import React from 'react'
import movie_icon from './images/movie_icon.png'

const Header = () => {
  return (
    <div className='px-8 py-2 bg-gradient-to-b from-white'>
        <img src={movie_icon} alt="movie_icon" className='w-40' />
    </div>
  )
}

export default Header
import React from 'react'
import Header from './Header'
import LoginPage from './LoginPage'
import backgroundImage from './images/background.jpeg'

const Body = () => {
  return (
    <div>
        <img src={backgroundImage} alt="backgroundIMage" className='absolute -z-10' />
        <Header/>
        <LoginPage/>
    </div>
  )
}

export default Body
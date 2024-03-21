import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from './customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const BrowsePage = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default BrowsePage;
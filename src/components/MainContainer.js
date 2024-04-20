import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movieData = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movieData) return null
    const movieTitle = movieData[0]
    const {original_title,overview,id} = movieTitle

  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackGround movieId={id}/>
    </div>
  ) 
}

export default MainContainer 
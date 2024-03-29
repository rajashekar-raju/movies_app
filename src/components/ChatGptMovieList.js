import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const ChatGptMovieList = () => {

    const tmdbMovieNames = useSelector((store)=>store.gptMovies?.tmdbMovieNames)
    const tmdbMovieLists = useSelector((store)=>store.gptMovies?.tmdbMovieLists)
    if(!tmdbMovieNames) return null
    if(!tmdbMovieLists) return null
    // console.log(tmdbMovieNames)

  return (

    <div className='bg-black bg-opacity-80 mt-5'>
        {
            tmdbMovieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={tmdbMovieLists[index]}/>)
        }
    </div>
  )
}

export default ChatGptMovieList
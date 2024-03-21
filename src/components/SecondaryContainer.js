import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies)
  console.log(nowPlayingMovies)
  if(!nowPlayingMovies) return

  return (
    <div>
        <MovieList title="Now PlayingMovies" movies={nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer;
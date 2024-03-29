import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies)
  const popularMovies = useSelector((store)=>store.movies?.popularMovies)
  const topRatedMovies = useSelector((store)=>store.movies?.topRatedMovies)
  const upcomingMovies = useSelector((store)=>store.movies?.upcomingMovies)
  if(!nowPlayingMovies) return
  if(!popularMovies) return
  if(!topRatedMovies) return
  if(!upcomingMovies) return
  // console.log(topRatedMovies); 

  return (
    <div className='bg-black'>
        <div className='-mt-32 pl-2 relative z-20 lg:-mt-52 xl:-mt-[350px]'>
          <MovieList title="Now PlayingMovies" movies={nowPlayingMovies}/>
          <MovieList title="Popular Movies" movies={popularMovies}/>
          <MovieList title="Top Rated Movies" movies={topRatedMovies}/>
          <MovieList title="upComingMovies" movies={upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer
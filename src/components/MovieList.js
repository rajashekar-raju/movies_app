import React from 'react'
import MovieCard from './MovieCard'
import MovieDetailsPage from './MovieDetailsPage'

const MovieList = ({title,movies}) => {
  
  return (
    <div className=''>
        <h1 className='text-white text-sm ml-3 p-2 '>{title}</h1>
          <div className='flex gap-3 overflow-x-auto ml-6'>
              {
                movies.map(movie => 
                  (<MovieCard movieId={movie.id} key={movie.id} poster={movie.poster_path}/>))
              }
          </div>
    </div>
  )
}

export default MovieList 
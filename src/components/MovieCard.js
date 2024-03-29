import React from 'react'
import { IMG_URL } from '../utils/constants'
import { Link, useParams } from 'react-router-dom'

const MovieCard = ({movieId,poster}) => {
  if(!poster) return null
  return (
    <div className='mr-2 no-scrollbar'>
      <Link to={"/movieDetails/"+ movieId}>
          <img className='image cursor-pointer rounded-lg w-full max-w-60 h-24 lg:h-40 xl:h-48' src={IMG_URL+poster} alt="poster" />
      </Link>
    </div>
  )
}

export default MovieCard  
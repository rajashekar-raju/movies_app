import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div className='mr-2 no-scrollbar'>
        <img className='image cursor-pointer rounded-lg w-full max-w-60 h-24 lg:h-40 xl:h-48' src={IMG_URL+poster} alt="poster" />
    </div>
  )
}

export default MovieCard 
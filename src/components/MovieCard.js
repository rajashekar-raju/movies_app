import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div>
        <img src={IMG_URL+poster} alt="poster" />
    </div>
  )
}

export default MovieCard
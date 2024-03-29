import React, { useEffect, useState } from 'react'
import { IMG_URL, options } from '../utils/constants'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MovieDetailsPage = () => {

    const [movieDetails,setMovieDetails] = useState({})

    const {movieId} = useParams()

    
    const getMovieDetails = async (movieId) => {
        const data  = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'?language=en-US', options)
        const jsonData = await data.json()
        setMovieDetails(jsonData)
    }
    
    useEffect(()=>{
        getMovieDetails(movieId)
    },[])
    
    const {budget,genres,original_language,original_title,overview,poster_path,release_date,revenue,status,title,vote_average} = movieDetails
    
    console.log(movieDetails)

  return (
    <div className='w-1/2 bg-black text-white bg-opacity-80 mx-auto h-auto mt-10 p-3'>
            <img className='w-40 mx-auto' src={IMG_URL+poster_path} alt="poster" />
        <div className='ml-16 mt-3 mb-3 md:ml-24 lg:ml-40 xl:ml-56'>
            <p className='text-sm xl:text-lg'>originala movie title : {original_title}</p>
            <p className='text-sm  xl:text-lg'>english title : {title}</p>
            <p className='text-sm xl:text-lg'>originala movie language : {original_language}</p>
            <p className='text-sm xl:text-lg'>film budget : {budget}</p>
            <p className='text-sm xl:text-lg'>movie released date : {release_date}</p>
            <p className='text-sm xl:text-lg'>movie revenue : {revenue}</p>
            <p className='text-sm xl:text-lg'>movie imdb rating : {vote_average}</p>
            <p className='text-sm xl:text-lg'>movie status : {status}</p>
        </div>
            <p className='text-sm ml-3 lg:text-lg'><p className='text-lg underline'>movie overview</p>{overview}</p>
    </div>
  )
}

export default MovieDetailsPage
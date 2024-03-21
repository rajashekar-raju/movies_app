import React, { useEffect, useState } from 'react'
import { options } from '../utils/constants'

const VideoBackGround = ({movieId}) => {

  const [trailerKey,setTrailerKey] = useState(null)

  const getTrailer = async() => {

    const data = await fetch('https://api.themoviedb.org/3/movie/1011985/videos?language=en-US', options)
    const jsonData = await data.json();
    const filterdData = jsonData.results.filter((video)=>video.type === "Trailer")
    const movieTrailer = filterdData ? filterdData[0] : jsonData.results[0]
    setTrailerKey(movieTrailer.key)
    // console.log(movieTrailer)

  }

  useEffect(()=>{
    getTrailer()
  },[])

  return (
    <div className=''>

      <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
      </iframe>

    </div>
  )
}

export default VideoBackGround;
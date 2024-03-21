import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='absolute z-[4] mt-24 bg-gradient-to-r from-black w-screen aspect-video'>
        <div className='pt-48 pl-10 mb-3 text-amber-100'>
            <h1 className='text-2xl mb-3'>{title}</h1>
            <p className='w-1/4'>{overview}</p>
        </div>
        <div className='pl-10'>
            <button 
                className='px-8 py-3 mr-2 hover:bg-gray-400 rounded-lg outline-none bg-gray-300 text-black font-bold text-sm'
            >
                Play
            </button>
            <button 
                className='px-8 py-3 hover:bg-gray-300 rounded-lg outline-none bg-gray-300 text-black font-bold text-sm bg-opacity-50'
            >
                    More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
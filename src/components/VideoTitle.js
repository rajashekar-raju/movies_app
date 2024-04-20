import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='absolute bg-gradient-to-r from-black aspect-video w-screen'>
        <div className='pt-32 pl-10 mb-3 text-amber-100 xl:pt-40'>
            <h1 className='text-sm mb-3'>{title}</h1>
            <p className='w-1/3 text-sm hidden lg:block'>{overview}</p>
        </div>
        <div className='pl-10'>
            <button 
                className='px-3 py-2 mr-1 hover:bg-gray-400 rounded-lg outline-none bg-gray-300 text-black font-bold text-xs'
            >
                Play
            </button>
            <button 
                className='px-3 py-2 hover:bg-gray-300 rounded-lg outline-none bg-gray-300 text-black font-bold text-xs bg-opacity-50'
            >
                    More Info
            </button>
        </div>
    </div>
  ) 
}

export default VideoTitle 
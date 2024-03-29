import React, { useRef } from 'react'
import openai from '../utils/chatGptApi'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addGptMovies } from '../utils/chatGptMovies'

const ChatGptSearchBar = () => {

    const inputText = useRef(null)

    const dispatch = useDispatch()

    const movieSearchFunction = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options)
        const jsonData = await data.json()
        // console.log(jsonData)
        return jsonData.results
    }

    const handleGptSearch = async () => {

        // console.log(inputText.current.value)

        const Gptquery =  "Act as a Movie Recommendation system and suggest some movies for the query : " +
         inputText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const chatGptText = await openai.chat.completions.create({
            messages: [{ role: 'user', content: Gptquery }],
            model: 'gpt-3.5-turbo',
          });
        //   console.log(chatGptText)
          const gptMovies = chatGptText.choices[0]?.message?.content.split(",")
        //   console.log(gptMovies)

          const promisedArray = gptMovies.map((movie)=>movieSearchFunction(movie))

          const tmdbMovieResults = await Promise.all(promisedArray);

          dispatch(addGptMovies({movieNames:gptMovies,movieLists:tmdbMovieResults}))
    }

  return (
    <div className='pt-28'>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 flex  bg-black p-3 mx-auto rounded-xl'>
            <input 
                type="text" 
                placeholder='enter your movie query' 
                className='px-3 py-1 outline-none rounded-lg w-2/3 mr-2'
                ref={inputText}
            />
            <button 
                className='px-2 py-1 rounded-lg outline-none bg-red-700 ml-2 text-black w-2/6 lg:w-1/3'
                onClick={handleGptSearch}
            >
                submit
            </button>
        </form>
    </div>
  )
}

export default ChatGptSearchBar
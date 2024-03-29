import { useEffect } from "react"
import { options } from "../../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../../utils/moviesSlice"

const useTopRatedMovies = () => {

    const dispatch = useDispatch()

    const top_rated_movies = useSelector((store)=>store.movies?.topRatedMovies)

    const topRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const jsonData = await data.json()
        dispatch(addTopRatedMovies(jsonData.results))
    }
    useEffect(()=>{
        !top_rated_movies && topRatedMovies()
    },[])
}

export default useTopRatedMovies
import { useEffect } from "react"
import { options } from "../../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUpComingMovies } from "../../utils/moviesSlice"

const useUpComingMovies = () => {

    const dispatch = useDispatch()

    const up_coming_movies = useSelector((store)=>store.movies?.upcomingMovies)

    const upcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const jsonData = await data.json()
        dispatch(addUpComingMovies(jsonData.results))
    }
    useEffect(()=>{
        !up_coming_movies && upcomingMovies()
    },[])
}
export default useUpComingMovies
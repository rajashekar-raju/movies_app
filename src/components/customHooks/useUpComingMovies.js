import { useEffect } from "react"
import { options } from "../../utils/constants"
import { useDispatch } from "react-redux"
import { addUpComingMovies } from "../../utils/moviesSlice"

const useUpComingMovies = () => {

    const dispatch = useDispatch()

    const upcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        const jsonData = await data.json()
        dispatch(addUpComingMovies(jsonData.results))
    }
    useEffect(()=>{
        upcomingMovies()
    },[])
}
export default useUpComingMovies
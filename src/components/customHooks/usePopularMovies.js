import { useEffect } from "react";
import { options } from "../../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const popular_movies = useSelector((store)=>store.movies?.popularMovies)

    const PopularMoviesFunction = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const jsonData = await data.json();
        // console.log(jsonData)
        dispatch(addPopularMovies(jsonData.results))
    }

    useEffect(()=>{
        !popular_movies && PopularMoviesFunction()
    },[])
   
}

export default usePopularMovies
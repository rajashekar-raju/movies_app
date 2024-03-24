import { useEffect } from "react";
import { options } from "../../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch()

    const PopularMoviesFunction = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const jsonData = await data.json();
        // console.log(jsonData)
        dispatch(addPopularMovies(jsonData.results))
    }

    useEffect(()=>{
        PopularMoviesFunction()
    },[])
   
}

export default usePopularMovies
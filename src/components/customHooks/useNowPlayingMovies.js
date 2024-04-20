import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../../utils/constants";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const now_playing_movies = useSelector((store)=>store.movies?.nowPlayingMovies)

    const nowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            const jsonData = await data.json();
            dispatch(addNowPlayingMovies(jsonData.results));
    }
    useEffect(()=>{
        !now_playing_movies && nowPlayingMovies()
    },[])

}

export default useNowPlayingMovies 
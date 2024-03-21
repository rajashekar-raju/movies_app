import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../../utils/constants";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const nowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            const jsonData = await data.json();
            // console.log(jsonData.results);
            dispatch(addNowPlayingMovies(jsonData.results));
    }
    useEffect(()=>{
        nowPlayingMovies()
    },[])


}

export default useNowPlayingMovies
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from './moviesSlice'
import gptMoviesReducer from './chatGptMovies'

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        gptMovies : gptMoviesReducer
    },
});

export default appStore
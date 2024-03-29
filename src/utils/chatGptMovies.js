import { createSlice } from "@reduxjs/toolkit";

const chatGptMovies = createSlice({
    name : "gptMovies",
    initialState : {
        tmdbMovieNames : null,
        tmdbMovieLists : null,
        movieState : false
    },
    reducers : {
        addGptMovies : (state,action) => {
            const {movieNames,movieLists} = action.payload
            state.tmdbMovieNames = movieNames
            state.tmdbMovieLists = movieLists
        },
        toggleMovieState : (state) => {
            state.movieState = !state.movieState
        }
    }
})

export const {addGptMovies,toggleMovieState} = chatGptMovies.actions
export default chatGptMovies.reducer
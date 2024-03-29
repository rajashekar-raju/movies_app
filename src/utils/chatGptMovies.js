import { createSlice } from "@reduxjs/toolkit";

const chatGptMovies = createSlice({
    name : "gptMovies",
    initialState : {
        tmdbMovieNames : null,
        tmdbMovieLists : null,
    },
    reducers : {
        addGptMovies : (state,action) => {
            const {movieNames,movieLists} = action.payload
            state.tmdbMovieNames = movieNames
            state.tmdbMovieLists = movieLists
        }
    }
})

export const {addGptMovies} = chatGptMovies.actions
export default chatGptMovies.reducer
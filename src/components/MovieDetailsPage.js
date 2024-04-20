import React, { useEffect, useState } from 'react';
import { IMG_URL, options } from '../utils/constants';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const { movieId } = useParams();

    const getMovieDetails = async (movieId) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
        const jsonData = await data.json();
        setMovieDetails(jsonData);
    };

    useEffect(() => {
        getMovieDetails(movieId);
    }, []);

    const {
        budget,
        genres,
        original_language,
        original_title,
        overview,
        poster_path,
        release_date,
        revenue,
        status,
        title,
        vote_average,
    } = movieDetails;

    return (
        <div className="container mx-auto mt-10 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <img className="w-full h-[600px] mx-auto" src={IMG_URL + poster_path} alt="poster" />
                </div>
                <div className="col-span-2">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-4">{title}</h1>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Original Title:</span> {original_title}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Original Language:</span> {original_language}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Budget:</span> {budget}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Release Date:</span> {release_date}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Revenue:</span> {revenue}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">IMDB Rating:</span> {vote_average}
                    </p>
                    <p className="text-sm lg:text-base mb-4">
                        <span className="font-semibold">Status:</span> {status}
                    </p>
                    <p className="text-base lg:text-lg mb-4 font-semibold">Movie Overview</p>
                    <p className="text-sm lg:text-base">{overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;

import React, { useState } from 'react';
import movie_icon from './images/movie_icon.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [showGptPage, setGptPage] = useState(false);

    const handleChatGptPage = () => {
        setGptPage(true);
    };

    const handleHomePage = () => {
        setGptPage(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-20">
            <div className="px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center">
                <img src={movie_icon} alt="movie_icon" className="w-10 bg-white rounded-lg lg:w-14" />
                {!showGptPage ? (
                    <Link className="text-white" to="/chatGpt" onClick={handleChatGptPage}>
                        Don't know what to watch? Use ChatGPT
                    </Link>
                ) : (
                    <Link to="/" className="text-white" onClick={handleHomePage}>
                        Back to Homepage
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;

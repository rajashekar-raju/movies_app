import React from 'react';
import Header from './Header';
import BrowsePage from './BrowsePage';
import backgroundImage from './images/background.jpeg';

const Body = () => {
    return (
        <div className="w-screen relative">
            <img src={backgroundImage} alt="backgroundIMage" className="absolute -z-10 w-full h-full" />
            <Header />
            <div className="mt-20">
                {/* Adjust margin-top to the height of your header */}
                <BrowsePage />
            </div>
        </div>
    );
};

export default Body;
 
import React from 'react'
import LogoW from '../assets/media/logo-w.svg';

function LoadingScreen() {
    return (
    // slide between pages
    <div className="loading-container">
        <div className="loading-screen">
            <div className="loading-screen-box1"></div>
            <div className="loading-screen-box2"></div>
        </div>
    </div>
    );
}

export default LoadingScreen;

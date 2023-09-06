import React from "react";
import "../assets/css/nav.css"

export default function Nav(){

    const playNowLink = "https://www.roblox.com/games/636542147/Theme-Park-Project"

// Function to handle the "Play Now" button click
    const handlePlayNowClick = () => {
        window.location.href = playNowLink;
    };

    const handleSidebar = () => {
        //TODO: sidebar logic.
    }

    return (
    <nav id="mainNav">
        <div className="nav-button-container" id="nav-main-buttons">
            <div className="nav-logo-container">
                <img src="img/vectors/vectorGameLogo.svg" alt="Project Theme Park logo" />
            </div>
            <button id="navButton" onClick={handlePlayNowClick}>
                <a href={playNowLink}>Play Now</a>
            </button>
            <button id="buttonToggleSidebar" onClick={handleSidebar} className="sidebarButton">&#9776; Game Info</button>
        </div>
    </nav>
    )
}
import React from "react";
import "../assets/scss/updatedNav.css"

export default function Nav(){

    const returnLink = "https://jacobjmiller.com/"

// Function to handle the "Play Now" button click
    const handleReturnClick = () => {
        window.location.href = returnLink;
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
            {<button id="navButton" onClick={handleReturnClick}>
                <a href={returnLink}>Return to Portfolio</a>
            </button> }
        </div>
    </nav>
    )
}
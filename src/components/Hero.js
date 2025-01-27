import React from "react";

//CSS import:
import "../assets/css/hero.css";

export default function Hero(props) {

    console.log("Hero.js: content:"+ props.contentTopic)

    // determine content to render based on props (requested content)
    let heroToRender;
    let lowerGradientRender = (<div className="lower-gradient" id="heroGradient"></div>);
    let heroHeaderText = ""
    if (props.contentTopic == "Rides") {
        heroHeaderText = "Featuring over 20 epic rides!"
        heroToRender = (
            <img src="img/coaster_hero.jpg" id="heroRides" alt="Park pool with water slides and roller coaster in the background."/>
        );
    } else if (props.contentTopic == "Story") {
        heroHeaderText = "Play The Story, Live The Adventure!"
        heroToRender = (
            <img src="img/EndBringerHero.jpg" id="heroStory" alt="Park square with blue looping roller coaster and mountainous background."/>
        );
    } else {
        heroHeaderText = ""
        lowerGradientRender = (null)
        heroToRender = (
            <video id="heroFeatures" preload="auto" autoPlay={true} loop="loop" muted="muted">
                <source src="img/GamePromo.mp4" type="video/mp4"/>
            </video>
        );
    }

    //return the html elements:
    return (
        <div className="hero-container">
            {heroToRender}
            {lowerGradientRender}
        <div className="upper-gradient" id="heroGradientUpper"></div>
        <div className="hero-text" id="heroText">{heroHeaderText}</div>
    </div>
    );
}
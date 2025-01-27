import React from "react"

//component imports:
import Hero from "./Hero.js"
import ContentContainer from "./ContentContainer"

//css import:
import "../assets/css/main.css"

export default function Main(props){
    console.log("Main.js: content:" + props.textDescription)

    function handleChangeContent(request) {
        const contentTypes = ["Story", "Rides", "Features"];
        for (let i = 0; i < contentTypes.length; i++) {
            document.getElementById("button"+contentTypes[i]).classList = "notSelected";
        }
        props.funcTopicChange(request)
        document.getElementById("button"+ request).classList = ("isSelected");
    };

    return (
        <div>
        <div className="loading-msg" id="loadingMsg">
            <p>LOADING...</p>
        </div>

        <div className="background">
            <div className="fill"></div>
            <img src="img/parallax/ParallaxFull.png" alt="Mysterious looping roller coaster deep in the forest, mountainous background with night sky."/>
        </div>

        <div className="page-main-container" id="contentContainer">
            <div className ="l-gradient"></div>
            <div className ="r-gradient"></div>

        <Hero contentTopic={props.contentTopic}/>

        <div className="parallax-gradient"></div>
        <div className="button-container">
            <button className="notSelected" id="buttonStory" onClick={() => handleChangeContent("Story")} >Story</button>

            <button className="notSelected" id="buttonRides" onClick={() => handleChangeContent("Rides")}>Rides</button>

            <button className="isSelected" id="buttonFeatures" onClick={() => handleChangeContent("Features")}>Features</button>
        </div>

            <ContentContainer textDescription={props.textDescription} 
                contentArticles={props.contentArticles}>

            </ContentContainer>

        </div>
        </div>
    );
}
import React from "react";
import Nav from "./components/Nav"
import Main from "./components/Main"

//class/model imports:
import { FeaturesDescription, RidesDescription, StoryDescription } from "./assets/content/TextContentDescription";


function App() {

  let contentTopic = "Rides"
  let textContentObject = {"Features":FeaturesDescription, "Rides":RidesDescription, "Story":StoryDescription}

  return (
      <>
    <Nav></Nav>
    <Main contentTopic={contentTopic} textDescription={textContentObject[contentTopic]} ></Main>
    </>
  );
}

export default App;

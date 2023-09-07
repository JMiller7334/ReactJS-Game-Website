import React, { useState } from "react";
import Nav from "./components/Nav"
import Main from "./components/Main"

//class/model imports:
import { FeaturesDescription, RidesDescription, StoryDescription } from "./assets/content/TextContentDescription";
import { storyArticleInstances } from "./assets/content/TextArticle-Story";
import { ridesArticleInstances } from "./assets/content/TextArticle-Rides";
import { featuresArticleInstances } from "./assets/content/TextArticle-Features";

function App() {

  const [contentTopic, setContentTopic] = useState("Features");
  const handleChangeContent = (newTopic) => {
    setContentTopic(newTopic);
  };

  let textContentObject = {"Features":FeaturesDescription, "Rides":RidesDescription, "Story":StoryDescription}
  let articlesObject = {"Story":storyArticleInstances, "Rides":ridesArticleInstances, "Features":featuresArticleInstances};

  return (
      <>
    <Nav></Nav>
    <Main contentTopic={contentTopic} textDescription={textContentObject[contentTopic]}
    contentArticles={articlesObject[contentTopic]} funcTopicChange = {handleChangeContent} ></Main>
    </>
  );
}

export default App;

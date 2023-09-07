import React from "react";

//component import:
import ContentArticle from "../components/ContentArticle"

//css import:
import "../assets/css/contentContainer.css";
import {v4 as uuidv4} from "uuid";

/*CONTENT-CONTAINER
this holds the topic introduction information.
 */

export default function ContentContainer(props) {

    // Replace \n with <br /> for line breaks
    const contentWithLineBreaks = props.textDescription.content.replace(/\n/g, "<br/>");
    let renderSectionTitle = (null) //the section title; what it is rendering
    let categoryId = "category-"
    if (props.contentTopic == "Story"){
        renderSectionTitle = ( <h1>{props.textDescription.sectionTitle}</h1>)
        categoryId = "categoryStory"
    }

    let renderArticles = (
        props.contentArticles.map( v => {
            return <ContentArticle key={uuidv4()} articleObject = {v}/>
        })
    )


    return (
        <div className="category-container" id={categoryId}>
            <div className="synopsis-container">
                    <h2>{props.textDescription.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}></p>
            </div>

            <div className="content-container">
            <section>
                {renderSectionTitle}
                {renderArticles}
            </section>
            </div>
        </div>
    );
}
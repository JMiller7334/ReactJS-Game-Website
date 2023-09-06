import React from "react";

export default function ContentContainer(props) {

    // Replace \n with <br /> for line breaks
    const contentWithLineBreaks = props.textDescription.content.replace(/\n/g, "<br />");

    return (
        <div className="category-container" id="categoryStory">
            <div className="synopsis-container">
                    <h2>{props.textDescription.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}></p>
            </div>
        </div>
    );
}
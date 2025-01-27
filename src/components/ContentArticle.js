import React from "react";

export default function ContentArticle(props){
    console.log("ContentArticle: "+ props.articleObject)
//properties recieved from class/model
    const articleObj = props.articleObject

    const title = articleObj.title
    const cssArticleId = articleObj.cssArticleId
    const textContent = articleObj.content
    const imgPath = articleObj.img
    const cssImgId = articleObj.cssImgId
    const altTag = articleObj.alt

     // Replace \n with <br /> for line breaks
     const contentWithLineBreaks = textContent.replace(/\n/g, "<br/>");
    
     return (
        <article id={cssArticleId}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }}></p>
            <img src={imgPath} id={cssImgId} alt={altTag}/>
        </article>
    )

   //return (null);
    
}
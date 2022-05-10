import React from "react";
import './Article.css';


function Article(props){
    return (
        <article>
            <a href={'https://reddit.com'+ props.article.permalink} target='_blank' rel="noreferrer" >
                <h3>{props.article.title}</h3>
            </a>
            <p className="author">by {props.article.author}</p>
        </article>
    )
}

export default Article;



  

  
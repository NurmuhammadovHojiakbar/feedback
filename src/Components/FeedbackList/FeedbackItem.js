import React from 'react';
import Arrow from "../../Assets/Icons/arrow-top.png"
import Comment from "../../Assets/Icons/comment-icon.png"

const FeedbackItem = ({feedback}) => {

    let {likes} = feedback
    const likeHandler = ()=>{
    }

    return (
        <li  className="feedback-item">
            <header className="feedback-item__header">
                <span className="feedback-image" style={{backgroundColor: feedback.imageColor}}></span>
                <h2 className="feedback-name">{ feedback.muallif }</h2>
            </header>
            <main className="feedback-item__main">
                <div className="likes-wrapper">
                    <button 
                        className="likes"
                        onClick={likeHandler}    
                    >
                        <img src={Arrow} alt="Arrow Icon"/>
                        <span>{likes}</span>
                    </button>
                </div>
                <div className="feedback-wrapper">
                    <h3 className="feedback-title">{ feedback.title }</h3>
                    <p className="feedback-body">{ feedback.body.slice(0,350) + "..." }</p>
                    <p className="feedback-type">{feedback.type}</p>
                </div>
                <p className="feedback-comment">
                    <img src={Comment} alt="Comment Icon"/>
                    <pan>{feedback.comments.length}</pan>
                </p>
            </main>
        </li>
    );
}

export default FeedbackItem;
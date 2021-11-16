import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useUser} from "../../Contexts/UserContext"
import Arrow from "../../Assets/Icons/arrow-top.png"
import Comment from "../../Assets/Icons/comment-icon.png"

const FeedbackItem = ({feedback}) => {

    const { user } = useUser();

    let [likes, setLikes] = useState(feedback.likes)
    const likeHandler = (e)=>{
        e.preventDefault();
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active")
            setLikes(likes - 1)
        }else if(!e.target.classList.contains("active")){
            e.target.classList.add("active")
            setLikes(likes + 1)
        }
    }

    return (
        <li  className="feedback-item" style={{display: feedback.display}}>
            <header className="feedback-item__header">
                <span className="feedback-image" style={{backgroundColor: feedback.imageColor}}></span>
                <h2 className="feedback-name">{ feedback.muallif }</h2>
            </header>
            <main className="feedback-item__main">
                <div className="likes-wrapper">
                    <a  
                        href="/"
                        className="likes-button"
                        onClick={user? likeHandler : (e)=>e.preventDefault()}    
                    >
                        <img src={Arrow} alt="Arrow Icon" width="8" height="4"/>
                        <span>{likes}</span>
                    </a>
                </div>
                <div className="feedback-wrapper">
                    <h3 className="feedback-title">{ feedback.title }</h3>
                    <p className="feedback-body">{ feedback.body.slice(0,350) + "..." }</p>
                    <p className="feedback-type">{feedback.type}</p>
                </div>
                <Link to={`/comments/${feedback.title}`} className="feedback-comment">
                    <img src={Comment} alt="Comment Icon"/>
                    <pan>{feedback.comments.length}</pan>
                </Link>
            </main>
        </li>
    );
}

export default FeedbackItem;
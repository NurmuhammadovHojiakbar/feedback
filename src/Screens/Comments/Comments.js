import React, { useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Comments.css"
import GoBack from "../../Components/GoBack/GoBack"
import {useUser} from "../../Contexts/UserContext"
import {useFeedback} from "../../Contexts/FeedbackContext"
import Arrow from "../../Assets/Icons/arrow-top.png"
import Comment from "../../Assets/Icons/comment-icon.png"

const Comments = () => {

    const {user} = useUser()
    const [feedback, setFeedback] = useState()
    const {feedbackdata} = useFeedback()
    const {comments} = useParams()
    const [likes, setLikes] = useState(feedback?.likes)
    
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

    useEffect(()=>{
        const seperatedata = feedbackdata.find(d=>{
            return d.title === comments
        })

        setFeedback(seperatedata)
    },[feedbackdata,comments])

    return (
        <div className="comments-wrapper">
            <div className="container">
                <header className="comments-header">
                    <GoBack />
                </header>
                <main>
                    <div className="user-comment">
                        <header className="feedback-item__header">
                            <span className="feedback-image" style={{backgroundColor: feedback?.imageColor}}></span>
                            <h2 className="feedback-name">{ feedback?.muallif }</h2>
                        </header>
                        <main className="feedback-item__main">
                            <div className="feedback-wrapper">
                                <h3 className="feedback-title">{ feedback?.title }</h3>
                                <p className="feedback-body">{ feedback?.body.slice(0,350) + "..." }</p>
                                <p className="feedback-type">{feedback?.type}</p>
                            </div>
                            <Link 
                                to={`/comments/${feedback?.title}`} 
                                className="feedback-comment"
                                onClick={(e)=>e.preventDefault()}
                            >
                                <img src={Comment} alt="Comment Icon"/>
                                <pan>{feedback?.comments.length}</pan>
                            </Link>
                        </main>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
}

export default Comments;
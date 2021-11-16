import React, { useEffect,useRef,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./Comments.css"
import GoBack from "../../Components/GoBack/GoBack"
import {useUser} from "../../Contexts/UserContext"
import {useFeedback} from "../../Contexts/FeedbackContext"
import Comment from "../../Assets/Icons/comment-icon.png"
import CommentItem from './CommentItem';

const Comments = () => {

    const {comments} = useParams()
    const {user} = useUser()
    const {feedbackdata, setFeedbackdata} = useFeedback()
    const [feedback, setFeedback] = useState()
    const [commentLength, setCommentLength] = useState(250)
    const [stop, setStop] = useState(false)
    const textareaRef = useRef()

    const CommentHandler = (e)=>{
        if(e.target.value.length>0){
            setCommentLength(250 - e.target.value.length)
            setStop(false)
        }if(e.target.value.length === 250){
            setStop(true)
        }
    }

    const PostCommentHandler = (e)=>{
        e.preventDefault();
        const comment = feedbackdata?.map(d=>{
                            if(d.title === comments){
                                return {...d, comments:[
                                    ...d.comments, {
                                        id: Math.random(),
                                        muallif: user.name,
                                        imageColor: "#c36a2d",
                                        body: textareaRef.current.value,
                                        replies: [],
                                    }
                                ]}
                            }if(d.title !== comments){
                                return d
                            }
                            return feedbackdata
                        })
        setFeedbackdata(comment)
        textareaRef.current.value = ""
        setCommentLength(250)
    }

    useEffect(()=>{
        const seperatedata = feedbackdata?.find(d=>{
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
                <main className="comments-main">
                    <div className="user-comment">
                        <header className="feedback-item__header">
                            <span className="feedback-image" style={{backgroundColor: feedback?.imageColor}}></span>
                            <h2 className="feedback-name">{ feedback?.muallif }</h2>
                        </header>
                        <main className="feedback-item__main">
                            <div className="feedback-wrapper">
                                <h3 className="feedback-title">{ feedback?.title }</h3>
                                <p className="feedback-body">{ feedback?.body}</p>
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
                    <div className="user-comments__wrapper">
                        <h2>{feedback?.comments.length} ta izoh mavjud</h2>
                        <ul className="user-comments__list">
                            {
                                feedback?.comments.map(c=>{
                                    return <CommentItem comment={c} />
                                })
                            }
                        </ul>
                    </div>
                </main>
                {!user && <p className="feedback-body" style={{textAlign:'center'}}>Ro'yxatdan o'ting va izoh qoldiring!</p>}
                {user && 
                <footer>
                    <form class="post-comment-form" onSubmit={PostCommentHandler}>
                        <label className="add-comment__title" htmlFor="comment">Add Comment</label>
                        <textarea 
                            className="add-comment__input feedback-info-textarea"
                            name="comment" 
                            id="comment"
                            required
                            placeholder="Type your comment here"
                            rows="4"
                            onInput={CommentHandler}
                            maxLength="250"
                            ref={textareaRef}
                            />
                        {stop && <span className="warning-info">No more you can't</span>}
                        <div className="post-comment-wrapper">
                            <span className="comment-length-info">{commentLength} Characters left</span>
                            <button className="post-comment__button add-feedback" type="submit">Post Comment</button>
                        </div>
                    </form>
                </footer>}
            </div>
        </div>
    );
}

export default Comments;
import React, {useRef, useState} from 'react';
import {useUser} from "../../Contexts/UserContext"
import {useFeedback} from "../../Contexts/FeedbackContext"

const CommentItem = ({comment}) => {

    const {feedbackdata,setFeedbackdata} = useFeedback()
    const {user} = useUser()
    const [replying, setReplying] = useState(false)
    const replyRef = useRef()


    const replyHandler = (e)=>{
        e.preventDefault();
        
        const newFeedback = feedbackdata.map(f=>{
            if(f.comments.find(c=>c.id === comment.id)){
                f.comments.map(cm=>{
                    if(cm.id === comment.id){
                        return cm.replies.push({
                            id: Math.random(),
                            muallif: user.name,
                            imageColor: "#3d0000",
                            body: replyRef.current.value,
                        })
                    }if(cm.id !== comment.id){
                        return cm
                    }
                    return f.comments
                })
                return f
            }if(f.comments.find(c=>c.id !== comment.id)){
                return f
            }
            return f
        })

        setFeedbackdata(newFeedback)

        replyRef.current.value=""
    }

    return (
        <li className="user-comments__item">
            <div className="feedback-item__header">
                <span className="feedback-image" style={{backgroundColor: comment.imageColor}}></span>
                <h2 className="feedback-name">{ comment.muallif }</h2>
                {user && 
                <button className="reply-button" onClick={()=>setReplying(true)}>Reply</button>}
            </div>
            <p className="feedback-body">{ comment.body }</p>

            {comment.replies.length > 0 && 
                <ul className="replies-list">
                    {
                        comment.replies.map(r=>(
                            <li className="replies-item">
                                <div className="feedback-item__header">
                                    <span className="feedback-image" style={{backgroundColor: r.imageColor}}></span>
                                    <h2 className="feedback-name">{ r.muallif }</h2>
                                </div>
                                <p className="feedback-body">{ r.body }</p>
                            </li>
                    ))
                    }
                </ul>
            }

            {
                replying && 
                <form className="reply-form" onSubmit={replyHandler}>
                    <textarea 
                        className="reply-form__input feedback-info-textarea" 
                        name="reply" 
                        placeholder="Reply"
                        maxLength="200"
                        required 
                        ref={replyRef}
                    />
                    <div className="reply-form__buttons">
                        <button 
                            className="reply-form-button reply-button__cancel" 
                            onClick={()=>setReplying(false)}
                        >Cancel</button>
                        <button 
                            className="reply-form-button reply-button__submit" 
                            type="submit">Reply</button>
                    </div>
                </form>
            }
        </li>
    );
}

export default CommentItem;
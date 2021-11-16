import React, {useState} from 'react';

const CommentItem = ({comment}) => {

    const [replying, setReplying] = useState(false)

    return (
        <li className="user-comments__item">
            <div className="feedback-item__header">
                <span className="feedback-image" style={{backgroundColor: comment.imageColor}}></span>
                <h2 className="feedback-name">{ comment.muallif }</h2>
                <button className="reply-button" onClick={()=>setReplying(true)}>Reply</button>
            </div>
            <p className="feedback-body">{ comment.body }</p>
            {
                replying && 
                <form className="reply-form" onSubmit={(e)=>e.preventDefault()}>
                    <textarea 
                        className="reply-form__input feedback-info-textarea" 
                        name="reply" 
                        placeholder="Reply"
                        maxLength="200"
                        required 
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
import React from 'react';

const CommentItem = ({comment}) => {
    return (
        <li className="user-comments__item">
            <div className="feedback-item__header">
                <span className="feedback-image" style={{backgroundColor: comment.imageColor}}></span>
                <h2 className="feedback-name">{ comment.muallif }</h2>
            </div>
            <p className="feedback-body">{ comment.body }</p>
        </li>
    );
}

export default CommentItem;
import React from 'react';
import "./Feedback.css"
import Data from "../../Data/Data"
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
    return (
        <ul className="feedback-list">
            {
                Data.map(f=>(
                    <FeedbackItem feedback={f} />
                ))
            }
        </ul>
    );
}

export default FeedbackList;
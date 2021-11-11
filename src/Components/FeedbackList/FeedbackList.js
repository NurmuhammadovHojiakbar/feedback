import React from 'react';
import "./Feedback.css"
import FeedbackItem from './FeedbackItem';
import { useFeedback } from '../../Contexts/FeedbackContext';

const FeedbackList = () => {

    const {feedbackdata} = useFeedback()

    return (
        <>
            <ul className="feedback-list">
                {
                    feedbackdata?.map(f=>(
                        <FeedbackItem feedback={f} />
                    ))
                }
            </ul> 
        </>
    );
}

export default FeedbackList;
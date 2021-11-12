import React, { useEffect, useState } from 'react';
import "./Feedback.css"
import FeedbackItem from './FeedbackItem';
import { useFeedback } from '../../Contexts/FeedbackContext';
import NotFound from '../NotFound/NotFound';

const FeedbackList = () => {

    const {feedbackdata} = useFeedback()
    const [notFound, setNotFound] = useState(false)
    

    useEffect(()=>{
        if(feedbackdata.find(f=>{
            return f.display === "block"
        })){
            return setNotFound(false)
        }else{
            return setNotFound(true)
        }
    },[feedbackdata])

    return (
        <>
            {
                notFound? 
                <NotFound />
                    : 
                <ul className="feedback-list">
                    {
                        feedbackdata?.map(f=>(
                            <FeedbackItem feedback={f} />
                        ))
                    }
                </ul>
            }
        </>
    );
}

export default FeedbackList;
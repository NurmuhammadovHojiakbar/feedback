import React, { useContext, useEffect, useState } from 'react';
import Data from "../Data/Data"

const FeedbackContext = React.createContext();

export const FeedbackProvider = ({children}) =>{

    const [feedbackdata, setFeedbackdata] = useState(JSON.parse(window.localStorage.getItem("feedbackdata")))
    
    useEffect(()=>{
        if(feedbackdata){
            window.localStorage.setItem("feedbackdata", JSON.stringify(feedbackdata))
        }else{
            setFeedbackdata(Data.feedbackdata)
        }
    },[feedbackdata])

    return(
        <FeedbackContext.Provider value={{feedbackdata, setFeedbackdata}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export const useFeedback = () => useContext(FeedbackContext)
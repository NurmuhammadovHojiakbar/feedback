import React, { useEffect, useState } from 'react';
import "./BoardHeader.css";
import Bulb from "../../Assets/Icons/bulb-icon.png"
import AddFeedback from "../AddFeedback/AddFeedback"
import {useUser} from "../../Contexts/UserContext"
import { useFeedback } from '../../Contexts/FeedbackContext';

const BoardHeader = () => {

    const {user} = useUser();
    const {feedbackdata} = useFeedback()
    const [currentdata, setCurrentdata] = useState(null)

    useEffect(()=>{
        const currentData = feedbackdata.filter(f =>{
            return f.display === "block"
        })
        setCurrentdata(currentData)
    },[feedbackdata])

    return (
        <header className="board-header">
            <h2 className="board-header__suggestion">
                <img src={Bulb} alt="Bulb" />
                <span>{ currentdata?.length } Suggestions</span>
            </h2>
            {user && <AddFeedback />}
        </header>
    );
}

export default BoardHeader;
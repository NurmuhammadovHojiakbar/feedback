import React from 'react';
import "./BoardHeader.css";
import Bulb from "../../Assets/Icons/bulb-icon.png"
import AddFeedback from "../AddFeedback/AddFeedback"
import {useUser} from "../../Contexts/UserContext"
import { useFeedback } from '../../Contexts/FeedbackContext';

const BoardHeader = () => {

    const {user} = useUser();
    const {feedbackdata} = useFeedback()

    return (
        <header className="board-header">
            <h2 className="board-header__suggestion">
                <img src={Bulb} alt="Bulb" />
                <span>{ feedbackdata?.length } Suggestions</span>
            </h2>
            {user && <AddFeedback />}
        </header>
    );
}

export default BoardHeader;
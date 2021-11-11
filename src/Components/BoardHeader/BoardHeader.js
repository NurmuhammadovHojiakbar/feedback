import React from 'react';
import "./BoardHeader.css";
import Bulb from "../../Assets/Icons/bulb-icon.png"
import AddFeedback from "../AddFeedback/AddFeedback"
import {useUser} from "../../Contexts/UserContext"
import Data from "../../Data/Data"

const BoardHeader = () => {

    const {user} = useUser();

    return (
        <header className="board-header">
            <h2 className="board-header__suggestion">
                <img src={Bulb} alt="Bulb" />
                <span>{ Data.length } Suggestions</span>
            </h2>
            {user && <AddFeedback />}
        </header>
    );
}

export default BoardHeader;
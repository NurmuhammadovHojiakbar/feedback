import React from 'react';
import { Link } from 'react-router-dom';
import "./GoBack.css"
import GoBackImage from "../../Assets/Icons/arrow-left.png"

const GoBack = () => {
    return (
        <Link className="go-back" to="/" >
            <img className="go-back__img" src={GoBackImage} alt="back"/>
            <span>Go Back</span>
        </Link>
    );
}

export default GoBack;
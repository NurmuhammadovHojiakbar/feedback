import React from 'react';
import GoBack from '../../Components/GoBack/GoBack';
import "./AddFeedbackRoute.css"
import plusimage from "../../Assets/Icons/plus.png"

const AddFeedbackRoute = () => {
    return (
        <div className="add-feedback-container">
            <div className="go-back-container"><GoBack /></div>
            <div className="create-new-feedback">
                <img className="create-new-feedback__img" src={plusimage} alt="add" />
                <h2 className="create-new-feedback__title">Yangi fikr-mulohaza qo'shish</h2>
                <form className="create-new-feedback__form">

                </form>
            </div>
        </div>
    );
}

export default AddFeedbackRoute;
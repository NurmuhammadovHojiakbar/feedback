import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import "./AddFeedbackRoute.css"
import plusimage from "../../Assets/Icons/plus.png"
import GoBack from '../../Components/GoBack/GoBack';
import { Link } from 'react-router-dom';
import {useUser} from "../../Contexts/UserContext"
import {useFeedback} from "../../Contexts/FeedbackContext"

const AddFeedbackRoute = () => {

    const colors = ["#E59934","#A9333A", "#1E5128","#193498", "#AB6D23", "#F0A500","#B24080","#1DB9C3"]
    const titleRef = useRef();
    const detailRef = useRef();
    const history = useHistory();


    const {user} = useUser();
    const {feedbackdata, setFeedbackdata} = useFeedback();

    const addNewFeedback=(e)=>{
        e.preventDefault();

        setFeedbackdata([...feedbackdata,{
            id: Math.random(),
            muallif: user.name,
            imageColor: colors[Math.floor(Math.random()*colors.length)],
            title: titleRef.current.value,
            body: detailRef.current.value,
            type: "React",
            display: "block",
            likes: 0,
            comments: []
        }])

        titleRef.current.value = ""
        detailRef.current.value = ""

        history.push("/")
    }

    return (
        <div className="add-feedback-container">
            <div className="go-back-container"><GoBack /></div>
            <div className="create-new-feedback">
                <img className="create-new-feedback__img" src={plusimage} alt="add" />
                <h2 className="create-new-feedback__title">Yangi fikr-mulohaza qo'shish</h2>
                <form 
                    className="create-new-feedback__form"
                    method="POST"
                    onSubmit={addNewFeedback}
                >
                    <div className="new-feedback-wrapper">
                        <label htmlFor="title">
                            <span className="new-feedback-title">Fikr-Mulohaza sarlavhasi</span>
                            <span className="new-feedback-detail">Qisqa va ma'noli sarlavha yozing</span>
                        </label>
                        <textarea 
                            className="feedback-info-textarea" 
                            name="title" 
                            id="title" 
                            rows="2" 
                            required
                            ref={titleRef}    
                        />
                    </div>
                    <div className="new-feedback-wrapper">
                        <label htmlFor="detail">
                            <span className="new-feedback-title">Fikr-Mulohaza batafsil</span>
                            <span className="new-feedback-detail">Qanday muammo, tavsiya va hokazolar bo'yicha har qanday aniq sharhlarni qo'shing.</span>
                        </label>
                        <textarea 
                            className="feedback-info-textarea" 
                            name="detail" 
                            id="detail" 
                            rows="4" 
                            required  
                            ref={detailRef}  
                        />
                    </div>
                    <div className="new-feedback-wrapper new-feedback-wrapper__buttons">
                        <Link className="new-feedback-wrapper__button new-feedback-wrapper__cancel" to="/">Bekor qilish</Link>
                        <button className="new-feedback-wrapper__button new-feedback-wrapper__submit" type="submit">Qo'shish</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddFeedbackRoute;
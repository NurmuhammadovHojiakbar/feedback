import React from 'react';
import "./NotFound.css"
import AddFeedback from "../AddFeedback/AddFeedback"
import {useUser} from "../../Contexts/UserContext"
import notFoundImage from "../../Assets/Icons/not-found.png"

const NotFound = () => {

    const {user} = useUser();

    return (
        <div className="not-found-wrapper">
            <div className="not-found">
                <img 
                    className="not-found__img" 
                    src={notFoundImage} 
                    alt="Not Found" 
                    width="130" 
                    height="140"
                />
                <h2 className="not-found__caption">Bu mavzuda fikr-mulohazalar mavjud emas!</h2>
                <p className="not-found__text">Bu mavzuda fikr-mulohaza mavjud emas, { user && "lekin siz qo'sha olasiz!" } { !user && "agar qo'shishni hohlasangiz iltimos ro'yxatdan o'ting!" }</p>
                { user && <AddFeedback /> }
            </div>
        </div>
    );
}

export default NotFound;
import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import "./Log.css"
import { useUser } from '../../Contexts/UserContext';

function Log() {

    const name = useRef();
    const password = useRef();
    const history = useHistory();
    const {setUser} = useUser();
    const setUserInfo = (e) =>{
        e.preventDefault();
        const userInfo = {
            name: name.current.value,
            password: password.current.value
        };
        setUser(userInfo)
        name.current.value = "";
        password.current.value = "";
        history.push("/")
    }

    return (
        <>
            <div className="log-container">
                <form 
                    className="log-container__form"
                    onSubmit={setUserInfo}    
                    method="POST"
                >
                    <label htmlFor="name">Ismingiz:</label>
                    <input 
                        className="info-input" 
                        type="text" 
                        name="name" 
                        id="name"
                        required
                        placeholder="Ismingiz..." 
                        ref={name}
                    />
                    <label htmlFor="password">Parolingiz:</label>
                    <input 
                        className="info-input" 
                        type="password" 
                        name="password" 
                        id="password" 
                        required
                        placeholder="Shaxsiy parolingiz..."
                        ref={password}
                    />

                    <button className="submit-btn" type="submit">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Log;
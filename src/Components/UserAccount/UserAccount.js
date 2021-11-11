import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';
import "./UserAccount.css"

function UserAccount() {

    const {user,setUser} = useUser();

    return (
        <div className="user-account-wrapper">
            <div className="user-info">
                {
                    !user ? 
                        <Link className="log" to="/login">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4856 20H19.4856C20.5902 20 21.4856 19.1046 21.4856 18V6C21.4856 4.89543 20.5902 4 19.4856 4H15.4856V6H19.4856V18H15.4856V20Z" fill="black"/>
                                <path d="M10.1581 17.385L8.73788 15.9768L12.6571 12.0242L3.51415 12.0242C2.96187 12.0242 2.51416 11.5765 2.51416 11.0242C2.51416 10.4719 2.96188 10.0242 3.51417 10.0242L12.6763 10.0242L8.69587 6.0774L10.1041 4.6572L16.495 10.9941L10.1581 17.385Z" fill="black"/>
                            </svg>
                            <span>Log In</span>
                        </Link> : 
                        <div>
                            <h2 className="user-name">{ user.name }</h2>
                            <Link 
                                className="log" 
                                to="/"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    setUser(null)
                                }}
                            >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.51465 20H4.51465C3.41008 20 2.51465 19.1046 2.51465 18V6C2.51465 4.89543 3.41008 4 4.51465 4H8.51465V6H4.51465V18H8.51465V20Z" fill="black"/>
                                <path d="M13.8422 17.385L15.2624 15.9768L11.3432 12.0242L20.4861 12.0242C21.0384 12.0242 21.4861 11.5765 21.4861 11.0242C21.4861 10.4719 21.0384 10.0242 20.4861 10.0242L11.3239 10.0242L15.3044 6.0774L13.8962 4.6572L7.50527 10.9941L13.8422 17.385Z" fill="black"/>
                            </svg>
                            <span>Log out</span>
                        </Link>
                        </div>
                }
            </div>
            <h2 className="hub-name">MayoqHub</h2>
            <p className="hub-text">Fikr-mulohazalar oynasi</p>
        </div>
    );
}

export default UserAccount;
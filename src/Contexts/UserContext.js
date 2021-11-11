import React, { useContext, useEffect, useState } from 'react';

const UserContext = React.createContext(null)

export const UserProvider = ({children})=>{

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))


    useEffect(()=>{
        if(user){
            window.localStorage.setItem("user", JSON.stringify(user))
        }else{
            window.localStorage.removeItem("user")
        }
    },[user])
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext)
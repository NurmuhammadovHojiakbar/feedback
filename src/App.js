import React from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { FeedbackProvider } from './Contexts/FeedbackContext';
import { UserProvider } from './Contexts/UserContext';
import Home from "./Screens/Home/Home"
import Log from './Screens/Log/Log';

const Provider = ({ children })=>{
    return(
        <UserProvider>
            <FeedbackProvider>
                { children }
            </FeedbackProvider>
        </UserProvider>
    )
}

function App() {
    return (
        <Provider>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Log} />
            </Switch>
        </Provider>
    ); 
}

export default App;
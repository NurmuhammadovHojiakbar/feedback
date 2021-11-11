import React from 'react';
import { Link } from 'react-router-dom';
import "./AddFeedback.css"
const AddFeedback = () => ( 
    <Link className="add-feedback" to="/add-feedback">+  Add Feedback</Link>
)

export default AddFeedback;
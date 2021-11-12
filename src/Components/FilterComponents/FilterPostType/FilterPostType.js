import React from 'react';
import "./FilterPostType.css"
import {useFeedback} from "../../../Contexts/FeedbackContext"

const FilterPostType = () => {

    const {feedbackdata,setFeedbackdata} = useFeedback()

    const FilterTypeHandler = (e)=>{
        e.preventDefault();
        const filterList = document.querySelector(".filter-list")
        filterList.querySelectorAll(".filter-link").forEach(l =>{
            l.classList.remove("active")
        })
        e.target.classList.add("active")

        const newData = feedbackdata?.forEach(d=>{
            if(e.target.textContent === "Barchasi"){
                return {...d, display: "block"}
            }else{
                if(e.target.textContent === d.type){
                    return {...d, display: "block"}
                }if(e.target.textContent !== d.type){
                    return {...d, display: "none"}
                }
            }
        })
        setFeedbackdata(newData)
    }

    return (
        <div className="filter-type-wrapper">
            <ul className="filter-list">
                <li className="filter-item">
                    <a 
                        className="filter-link active" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >Barchasi</a>
                </li>
                <li className="filter-item">
                    <a 
                        className="filter-link" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >React</a>
                </li>
                <li className="filter-item">
                    <a 
                        className="filter-link" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >Vue</a>
                </li>
                <li className="filter-item">
                    <a 
                        className="filter-link" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >PHP</a>
                </li>
                <li className="filter-item">
                    <a 
                        className="filter-link" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >Bug</a>
                </li>
                <li className="filter-item">
                    <a 
                        className="filter-link" 
                        href="/"
                        onClick={FilterTypeHandler}
                    >Feature</a>
                </li>
            </ul>
        </div>
    );
}

export default FilterPostType;
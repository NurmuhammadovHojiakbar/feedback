import React from 'react';
import "./FilterPostType.css"

const FilterPostType = () => {

    const FilterTypeHandler = (e)=>{
        e.preventDefault();
        const filterList = document.querySelector(".filter-list")
        filterList.querySelectorAll(".filter-link").forEach(l =>{
            l.classList.remove("active")
        })
        e.target.classList.add("active")
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
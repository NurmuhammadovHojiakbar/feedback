import React from 'react';
import { Link } from 'react-router-dom';
import "./RoadmapInfo.css"

const RoadmapInfo = () => {
    return (
        <div className="roadmap-info">
            <header className="roadmap-info__header">
                <h2 className="roadmap-info__header-caption">Roadmap</h2>
                <Link className="roadmap-info__header-link" to="/roadmap">View</Link>
            </header>
            <ul className="roadmap-info__list">
                <li className="roadmap-info__item">
                    <p className="roadmap-info__text roadmap-info__text-planned">
                        <span className="roadmap-info__text-name">Planned</span>
                        <span className="roadmap-info__text-number">3</span>
                    </p>
                </li>
                <li className="roadmap-info__item">
                    <p className="roadmap-info__text roadmap-info__text-progress">
                        <span className="roadmap-info__text-name">In-Progress</span>
                        <span className="roadmap-info__text-number">0</span>
                    </p>
                </li>
                <li className="roadmap-info__item">
                    <p className="roadmap-info__text roadmap-info__text-live">
                        <span className="roadmap-info__text-name">Live</span>
                        <span className="roadmap-info__text-number">2</span>
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default RoadmapInfo;
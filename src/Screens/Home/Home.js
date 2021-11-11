import React from 'react';
import "./Home.css"
import UserAccount from '../../Components/UserAccount/UserAccount';
import FilterPostType from '../../Components/FilterComponents/FilterPostType/FilterPostType';
import RoadmapInfo from '../../Components/RoadmapInfo/RoadmapInfo';

function Home() {
    return (
        <main className="site-main">
            <div className="site-main__container container">
                <section className="site-main-left">
                    <UserAccount />
                    <FilterPostType />
                    <RoadmapInfo />
                </section>
                <section className="site-main-board"></section>
            </div>
        </main>
    );
}

export default Home;
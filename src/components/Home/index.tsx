import React from 'react';
import Events from '../Events';
import Vacancies from '../Vacancies';
import Video from '../Video';

const Home = () => {
    return (
        <div id='home'>
        <div className="container">
            <div className="home">
                <h1>Последние мероприятия</h1>
                <Events/>
                <h1>Последние вакансии</h1>
                <Vacancies />
                <h1>Последние видео</h1>
                <Video/>



            </div>
        </div>
        </div>
    );
};

export default Home;
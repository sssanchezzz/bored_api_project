import React from 'react';
import ActivityByType from './activity_pages/ActivityByType';
import Nav from './ui/Nav/Nav';
import RandomActivity from './activity_pages/RandomActivity';
import { Routes, Route } from 'react-router-dom';
import ActivityByParticipants from './activity_pages/ActivityByParticipants';
import ActivityByPrice from './activity_pages/ActivityByPrice';
import bg from '../img/bg_2x_cropped.png';

const MainPage = () => {
    return (
        <div className='main-page-wrapper'>
            <div className='main-page-inner-container'>
                <Nav />

                <Routes>
                    <Route path='/random' exact element={<RandomActivity />} />
                    <Route path='/by-type' exact element={<ActivityByType />} />
                    <Route
                        path='/by-participants'
                        exact
                        element={<ActivityByParticipants />}
                    />
                    <Route
                        path='/by-price'
                        exact
                        element={<ActivityByPrice />}
                    />
                </Routes>
            </div>
            <img src={bg} alt='bg' className='main-page-img-bg' />
        </div>
    );
};

export default MainPage;

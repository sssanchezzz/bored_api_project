import React from 'react';
import ActivityByType from './activity_pages/ActivityByType';
import Nav from './Nav';
import RandomActivity from './activity_pages/RandomActivity';
import { Routes, Route } from 'react-router-dom';
import ActivityByParticipants from './activity_pages/ActivityByParticipants';
import ActivityByPrice from './activity_pages/ActivityByPrice';

const MainPage = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/random' exact element={<RandomActivity />} />
                <Route path='/by-type' exact element={<ActivityByType />} />
                <Route
                    path='/by-participants'
                    exact
                    element={<ActivityByParticipants />}
                />
                <Route path='/by-price' exact element={<ActivityByPrice />} />
            </Routes>
        </div>
    );
};

export default MainPage;

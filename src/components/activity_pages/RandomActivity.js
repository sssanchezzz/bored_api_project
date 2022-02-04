import React from 'react';
import Card from '../ui/Card/Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import BoredButton from '../ui/BoredButton/BoredButton';
import '../../style/random_page.css';

const mapState = (state) => {
    return {
        activityData: state.activityData,
        isLoading: state.isLoading,
    };
};

const RandomActivity = (props) => {
    const { activityData, isLoading, ...actions } = props;
    // console.log('props', props);
    // console.log(isLoading);
    useEffect(() => {
        const fetchData = async () => {
            await actions.getRandomActivity();
            actions.setIsLoading(false);
        };
        actions.setIsLoading(true);
        fetchData();
    }, []);

    const cardButtonClickHandler = async () => {
        actions.setIsLoading(true);
        await actions.getRandomActivity();
        actions.setIsLoading(false);
    };
    return (
        <div className='random-activity-wrapper'>
            <Card data={activityData} isLoading={isLoading} />
            <BoredButton onClick={cardButtonClickHandler}>One More</BoredButton>
        </div>
    );
};

export default connect(mapState, actions)(RandomActivity);

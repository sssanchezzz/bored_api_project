import React from 'react';
import Card from '../Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const mapState = (state) => {
    return {
        activityData: state.activityData,
    };
};

const RandomActivity = (props) => {
    const { activityData, ...actions } = props;
    console.log('props', props);
    useEffect(() => {
        actions.getRandomActivity();
    }, []);

    const cardButtonClickHandler = () => {
        actions.getRandomActivity();
    };
    return (
        <div className='random-activity-wrapper'>
            <Card buttonHandler={cardButtonClickHandler} data={activityData} />
        </div>
    );
};

export default connect(mapState, actions)(RandomActivity);

import React from 'react';
import Card from '../ui/Card/Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import * as utils from '../../utils/Utils';

const mapState = (state) => {
    return {
        activityData: state.activityData,
        error: state.error,
    };
};

const ActivityByParticipants = (props) => {
    const { activityData, error, ...actions } = props;

    const [inputRange, setInputRange] = useState(1);

    useEffect(() => {
        actions.getActivityByParticipants(inputRange);
    }, []);

    const cardButtonClickHandler = () => {
        actions.getActivityByParticipants(inputRange);
    };
    const inputRangeHandler = (e) => {
        setInputRange(+e.target.value);
    };
    const inputTextHandler = (e) => {
        let value = +e.target.value;
        if (value >= utils.minParticipants && value <= utils.maxParticipants)
            setInputRange(value);
    };

    return (
        <div className='activity-by-type-wrapper'>
            <input
                type='range'
                name='Participants'
                onChange={inputRangeHandler}
                value={inputRange}
                min={utils.minParticipants}
                max={utils.maxParticipants}
            />
            <input
                type='text'
                value={inputRange}
                onChange={inputTextHandler}
                size='2'
            />

            <Card buttonHandler={cardButtonClickHandler} data={activityData} />
        </div>
    );
};

export default connect(mapState, actions)(ActivityByParticipants);

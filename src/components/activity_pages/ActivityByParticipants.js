import React from 'react';
import Card from '../ui/Card/Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import * as utils from '../../utils/Utils';
import BoredButton from '../ui/BoredButton/BoredButton';
import '../../style/participants_page.css';

const mapState = (state) => {
    return {
        activityData: state.activityData,
        error: state.error,
        isLoading: state.isLoading,
    };
};

const ActivityByParticipants = (props) => {
    const { activityData, error, isLoading, ...actions } = props;

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
        <div className='activity-by-participants-wrapper'>
            <h3>{inputRange}</h3>

            <input
                className='activity-input-range'
                type='range'
                name='Participants'
                onChange={inputRangeHandler}
                value={inputRange}
                min={utils.minParticipants}
                max={utils.maxParticipants}
            />

            <Card data={activityData} isLoading={isLoading} />
            <BoredButton onClick={cardButtonClickHandler}>One More</BoredButton>
        </div>
    );
};

export default connect(mapState, actions)(ActivityByParticipants);

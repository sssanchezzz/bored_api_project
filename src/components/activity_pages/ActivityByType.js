import React from 'react';
import Card from '../Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { activityTypes } from '../../utils/Utils';

const mapState = (state) => {
    return {
        activityData: state.activityData,
    };
};

const ActivityByType = (props) => {
    const { activityData, ...actions } = props;

    const [option, setOption] = useState('');

    useEffect(() => {
        actions.getActivityByType(option);
    }, []);

    const cardButtonClickHandler = () => {
        actions.getActivityByType(option);
    };
    const selectChangeHandler = (e) => {
        console.log(e.target.value);
        setOption(e.target.value);
    };
    return (
        <div className='activity-by-type-wrapper'>
            <select onChange={selectChangeHandler} value={option}>
                <option>{''}</option>
                {activityTypes.map((activity) => (
                    <option key={activity}>{activity}</option>
                ))}
            </select>
            <Card buttonHandler={cardButtonClickHandler} data={activityData} />
        </div>
    );
};

export default connect(mapState, actions)(ActivityByType);

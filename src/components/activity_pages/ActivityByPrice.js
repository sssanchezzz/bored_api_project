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

const ActivityByPrice = (props) => {
    const { activityData, error, ...actions } = props;

    const [inputRange, setInputRange] = useState(0);

    useEffect(() => {
        actions.getActivityByPrice(inputRange);
    }, []);

    const cardButtonClickHandler = () => {
        actions.getActivityByPrice(inputRange);
    };
    const inputRangeHandler = (e) => {
        setInputRange(+e.target.value);
    };
    const inputTextHandler = (e) => {
        let value = e.target.value;
        if (value >= utils.minPrice && value <= utils.maxPrice)
            setInputRange(value);
    };

    return (
        <div className='activity-by-type-wrapper'>
            <input
                type='range'
                name='Price'
                onChange={inputRangeHandler}
                value={inputRange}
                step='0.1'
                min={utils.minPrice}
                max={utils.maxPrice}
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

export default connect(mapState, actions)(ActivityByPrice);

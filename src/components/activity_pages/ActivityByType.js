import React from 'react';
import Card from '../ui/Card/Card';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { activityTypes } from '../../utils/Utils';
import BoredButton from '../ui/BoredButton/BoredButton';
import '../../style/type_page.css';
import { motion, AnimatePresence } from 'framer-motion';

const mapState = (state) => {
    return {
        activityData: state.activityData,
        isLoading: state.isLoading,
    };
};

const ActivityByType = (props) => {
    const { activityData, isLoading, ...actions } = props;

    const [option, setOption] = useState('');

    useEffect(() => {
        actions.getActivityByType(option);
    }, []);

    const cardButtonClickHandler = () => {
        actions.getActivityByType(option);
    };
    const selectChangeHandler = (e) => {
        setOption(e.target.value);
    };
    return (
        <div className='activity-by-type-wrapper'>
            <div className='select-wrapper'>
                <label for='opt'>Choose Activity Type:</label>
                <select onChange={selectChangeHandler} value={option} id='opt'>
                    <option>{''}</option>
                    {activityTypes.map((activity) => (
                        <option key={activity}>{activity}</option>
                    ))}
                </select>
            </div>

            <AnimatePresence exitBeforeEnter>
                <motion.div
                    key={activityData.activity}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                    }}
                    initial={{ opacity: 0, y: '70vh' }}
                    exit={{ opacity: 0, y: '-70vh' }}
                >
                    <Card data={activityData} isLoading={isLoading} />
                </motion.div>
            </AnimatePresence>
            <BoredButton onClick={cardButtonClickHandler}>One More</BoredButton>
        </div>
    );
};

export default connect(mapState, actions)(ActivityByType);

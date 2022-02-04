import React from 'react';
import classes from './card.module.css';

const Cardfield = (props) => {
    const { left, right } = props;
    return (
        <>
            <div className={classes['card-div-left']}>{left}</div>
            <div className={classes['card-div-right']}>{right}</div>
        </>
    );
};

export default Cardfield;

import React from 'react';
import classes from './button.module.css';
const BoredButton = (props) => {
    return (
        <button {...props} className={classes['bored-button']}>
            {props.children}
        </button>
    );
};

export default BoredButton;

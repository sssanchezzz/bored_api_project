import React from 'react';

const BoredButton = (props) => {
    return <button {...props}>{props.children}</button>;
};

export default BoredButton;

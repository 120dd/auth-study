import React from 'react';

const Button = ({btnName, clickFunction}) => {
    return(
        <button onClick={clickFunction} >{btnName}</button>
    )
};

export default Button;
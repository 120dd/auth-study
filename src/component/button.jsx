import React from 'react';

const Button = ( { btnName , clickFunction , className } ) => {
    return (
        <button className={className} onClick={clickFunction}>{btnName}</button>
    )
};

export default Button;
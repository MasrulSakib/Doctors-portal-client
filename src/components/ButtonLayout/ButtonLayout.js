import React from 'react';

const ButtonLayout = ({ children }) => {
    return (

        <button className='my-6 w-28 btn bg-gradient-to-r from-primary to-secondary text-white'>{children}</button>

    );
};

export default ButtonLayout;
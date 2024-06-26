import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { userSignOut } = useContext(AuthContext);
    const nevigate = useNavigate()

    const handleLogout = () => {
        userSignOut()
            .then(() => {
                nevigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogout}>SignOut</button>and Login again.</h4>
        </div>
    );
};

export default DisplayError;
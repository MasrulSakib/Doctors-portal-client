import { format } from 'date-fns';
import React from 'react';

const AppointmentServices = ({ selectedDate, setSelectedDate }) => {
    return (
        <section>
            <div className='text-center my-32'>
                <p className='font-semibold text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
                <h2 className='font-light'>Please select a service.</h2>
            </div>
            <div>
                {

                }
            </div>
        </section>
    );
};

export default AppointmentServices;
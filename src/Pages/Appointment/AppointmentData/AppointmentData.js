import React from 'react';
import ButtonLayout from '../../../components/ButtonLayout/ButtonLayout';

const AppointmentData = ({ service }) => {

    const { name, slots } = service;
    return (
        <section>
            <div className="card shadow-xl w-80 md:w-96 mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="card-title text-secondary text-2xl font-semibold">{name}</h2>
                    <p>{slots.length > 0 ? `${slots[0]}` : 'No time slots available right now.'}</p>
                    <p>{slots.length > 0 ? `${slots.length} spaces available` : 'No spaces available'} </p>
                    <div className="card-actions justify-center">
                        <ButtonLayout>Book Appointment</ButtonLayout>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentData;
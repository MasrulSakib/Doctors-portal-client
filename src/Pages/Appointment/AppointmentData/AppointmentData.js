import React from 'react';

const AppointmentData = ({ service, setTreatment }) => {

    const { name, slots } = service;
    return (
        <section>
            <div className="card shadow-xl mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="card-title text-secondary text-2xl font-semibold">{name}</h2>
                    <p>{slots.length > 0 ? `${slots[0]}` : 'No time slots available right now.'}</p>
                    <p>{slots.length > 0 ? `${slots.length} spaces available` : 'No spaces available'} </p>
                    <div className="card-actions justify-center">

                        <label
                            disabled={slots.length === 0}
                            htmlFor="treatmentModal"
                            className="btn btn-outline btn-secondary my-6"
                            onClick={() => setTreatment(service)}>
                            Book Appointment</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentData;
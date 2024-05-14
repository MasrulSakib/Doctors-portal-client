import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentData from '../AppointmentData/AppointmentData';

const AppointmentServices = ({ selectedDate, setSelectedDate }) => {

    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        fetch('DentalServices.json')
            .then(res => res.json())
            .then(data => setServicesData(data))
    }
        , [setServicesData])


    return (
        <section>
            <div className='text-center my-32'>
                <p className='font-semibold text-secondary'>Available Services on {format(selectedDate, 'PP')}</p>
                <h2 className='font-light'>Please select a service.</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32'>
                {
                    servicesData.map(service => <AppointmentData
                        key={service._id}
                        service={service}
                    ></AppointmentData>)
                }
            </div>
        </section>
    );
};

export default AppointmentServices;
import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentServices from '../AppointmentService/AppointmentServices';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentServices
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentServices>
        </div>
    );
};

export default Appointment;
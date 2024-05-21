import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AppointmentServices from '../AppointmentService/AppointmentServices';
import DateFormatter from '../DateFormatter/DateFormatter';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const formattedDate = DateFormatter(selectedDate);
    return (
        <div>
            <AppointmentBanner
                formattedDate={formattedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AppointmentServices
                formattedDate={formattedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentServices>
        </div>
    );
};

export default Appointment;
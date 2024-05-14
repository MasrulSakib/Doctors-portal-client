import React from 'react';
import banner from '../../../assets/images/chair.png'
import backgroundImg from '../../../assets/images/bg.png'
import { DayPicker } from "react-day-picker";


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <section
            style={
                {
                    background: `url(${backgroundImg})`,
                    backgroundSize: 'contain'
                }
            }>
            <div className="hero">
                <div className="z-0 flex items-center justify-center md:max-w-7xl max-w-sm md:p-4 p-2 flex-col lg:flex-row-reverse">
                    <img className="lg:w-1/2 rounded-lg shadow-2xl ms-6" src={banner} alt='' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;
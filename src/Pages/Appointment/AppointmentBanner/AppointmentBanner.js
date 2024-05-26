import React from 'react';
import banner from '../../../assets/images/chair.png';
import backgroundImg from '../../../assets/images/bg.png';
import { DayPicker } from "react-day-picker";
// import DateFormatter from '../DateFormatter/DateFormatter';

const AppointmentBanner = ({ formattedDate, setSelectedDate }) => {
    // const formattedDate = DateFormatter(selectedDate);

    return (
        <section
            style={{
                background: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="hero">
                <div className="z-0 flex items-center justify-center md:max-w-7xl max-w-sm p-4 flex-col lg:flex-row-reverse">
                    <img className="lg:w-1/2 w-auto rounded-lg shadow-2xl md:ms-6" src={banner} alt='' />
                    <div>
                        <DayPicker
                            className='mx-0 px-0 max-w-xs'
                            mode='single'
                            selected={formattedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p className="mt-4">Selected Date: {formattedDate}</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
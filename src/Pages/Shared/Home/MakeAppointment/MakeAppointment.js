import React from 'react';
import appoinment from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor.png'
import ButtonLayout from '../../../../components/ButtonLayout/ButtonLayout';

const MakeAppointment = () => {
    return (

        // z-index: 0;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // max-width: 80rem/* 1280px */;
        // gap: 1rem/* 16px */;
        // padding: 1rem/* 16px */;

        <section
            className='my-32'
            style={
                {
                    background: `url(${appoinment})`

                }
            }>
            <div className="hero">
                <div className="flex flex-col lg:flex-row z-0 items-center justify-center md:gap-4 gap-0 pt-4 px-4 pb-0 text-white">
                    <img src={doctor} alt='' className="-mt-36 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <p className=' text-secondary font-semibold'>APPOINTMENT</p>
                        <h1 className="md:text-5xl text-3xl font-semibold">Make an appointment today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonLayout>Appointment</ButtonLayout>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;
import React from 'react';
import appoinment from '../../../../assets/images/appointment.png'
import doctor from '../../../../assets/images/doctor.png'
import ButtonLayout from '../../../../components/ButtonLayout/ButtonLayout';

const MakeAppointment = () => {
    return (

        <section
            className='mt-32'
            style={
                {
                    background: `url(${appoinment})`

                }
            }>
            <div className="hero">
                <div className="hero-content pb-0 flex-col lg:flex-row text-white">
                    <img src={doctor} alt='' className="-mt-36 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <p className=' text-secondary font-semibold'>APPOINTMENT</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonLayout>Appointment</ButtonLayout>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;
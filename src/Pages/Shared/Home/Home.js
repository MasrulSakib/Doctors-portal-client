import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
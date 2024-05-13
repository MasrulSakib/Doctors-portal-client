import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const InfoCards = () => {

    const Informations = [
        {
            id: 1,
            title: 'Opening Hours',
            description: 'Opens at 9.00am to 9pm everyday',
            logo: clock,
            background: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            title: 'Visit our Location',
            description: 'Brooklyn, NY 10036, United States',
            logo: marker,
            background: 'bg-[#3A4256]'
        },
        {
            id: 3,
            title: 'Contact us now',
            description: '+000 123 456789',
            logo: phone,
            background: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                Informations.map(info => <InfoCard
                    key={info.id}
                    info={info}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
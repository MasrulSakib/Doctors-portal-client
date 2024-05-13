import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const dentalServices = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 1,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 1,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening
        }
    ]
    return (
        <div>
            <h2 className=' text-center text-xl mt-36 text-primary font-semibold'>OUR SERVICES</h2>
            <p className='text-4xl text-center mb-20'>Services We Provide</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    dentalServices.map(service => <Service
                        key={service.key}
                        dentalService={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;
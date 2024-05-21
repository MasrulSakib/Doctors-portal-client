import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import treatment from '../../../../assets/images/treatment.png'
import Service from './Service';
import ButtonLayout from '../../../../components/ButtonLayout/ButtonLayout';

const Services = () => {

    const dentalServices = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride
        },
        {
            id: 2,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity
        },
        {
            id: 3,
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
                        key={service.id}
                        dentalService={service}
                    ></Service>)
                }

            </div>
            <div className=' container mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32 items-center mt-36'>
                    <div className='flex justify-end'>
                        <img className='rounded-xl md:h-[576px] h-auto' src={treatment} alt="" />
                    </div>
                    <div className='flex flex-col justify-start md:w-2/3 w-auto'>
                        <h2 className='text-5xl text-left mb-5'>Exceptional Dental Care, on Your Terms</h2>
                        <p className=' text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonLayout>Get Started</ButtonLayout>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
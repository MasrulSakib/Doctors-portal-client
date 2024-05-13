import React from 'react';
import comment from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png'
import people2 from '../../../../assets/images/people2.png'
import people3 from '../../../../assets/images/people3.png'
import Reviews from '../Reviews/Reviews';

const Testimonials = () => {

    const userReviews = [
        {
            id: 1,
            name: 'Winson Herry',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people1,
            country: 'California'
        },
        {
            id: 2,
            name: 'Rebecca Wilson',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people2,
            country: 'Texas'
        },
        {
            id: 3,
            name: 'Kim Jong',
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            image: people3,
            country: 'New York'
        },
    ]

    return (
        <section className='container mx-auto'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold text-secondary'>Testimonial</p>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-20' src={comment} alt="" />
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userReviews.map(rev => <Reviews
                        key={rev.id}
                        userReviews={rev}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
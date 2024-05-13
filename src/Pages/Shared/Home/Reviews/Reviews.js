import React from 'react';

const Reviews = ({ userReviews }) => {

    const { image, description, country, name } = userReviews;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                    <div className="flex items-center mt-4">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt='' />
                            </div>
                        </div>
                        <div className='ms-4'>
                            <p className='font-semibold'>{name}</p>
                            <p className=' text-sm'>{country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';

const Service = ({ dentalService }) => {

    const { title, description, icon } = dentalService;
    return (
        <div className="card card-compact bg-base-100 md:w-[440px] w-auto py-6 mx-auto mt-10 shadow-2xl">
            <figure>
                <img src={icon} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='mx-auto'>{description}</p>
            </div>
        </div>
    );
};

export default Service;
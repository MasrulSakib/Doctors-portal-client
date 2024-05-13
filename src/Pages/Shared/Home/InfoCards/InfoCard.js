import React from 'react';

const InfoCard = ({ info }) => {
    const { title, description, logo, background } = info;

    return (
        <div className={`card card-side bg-base-100 shadow-xl p-7 text-white ${background}`}>
            <figure><img src={logo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default InfoCard;
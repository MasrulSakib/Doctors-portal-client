import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {

    const bookingsData = useLoaderData()
    // console.log('bookings Data', bookingsData);

    const { selectedTreatment, price, slot, username, appointmentDate } = bookingsData;
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-16'>
                <h2 className="text-3xl font-semibold">Payment for: {selectedTreatment}</h2>
                <p className="text-xl">Dear {username}, Please pay <strong>${price}</strong> for the appointment on {appointmentDate} at {slot}</p>
            </div>
            <div className='w-96 py-10 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        bookingsData={bookingsData}
                    ></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
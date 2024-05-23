import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CheckOut = ({ bookingsData }) => {

    const { price, username, email, _id } = bookingsData;

    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [cardProcessing, setCardProcessing] = useState(false)
    const [cardTransection, setCardTransection] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-lemon.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                console.log(data)
            });
    }, [price]);

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            console.log("paymentMethod:", paymentMethod)
            setCardError('');
        }
        setCardSuccess('');
        setCardProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email
                    },
                },
            },

        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {


            const payment = {
                price,
                email,
                transectionId: paymentIntent.id,
                bookingId: _id
            }

            fetch('https://doctors-portal-server-lemon.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setCardSuccess('Congrats! your payment is successful')
                    setCardTransection(paymentIntent.id)
                })
        }
        setCardProcessing(false)

    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-outline' type="submit" disabled={!stripe || !clientSecret || cardProcessing}>
                    Purchase
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>

            {
                cardSuccess &&
                <div>
                    <p className='text-green-500'>{cardSuccess}</p>
                    <span className='font-semibold'>Your Transection Id: {cardTransection}</span>
                </div>
            }
        </>
    );
};

export default CheckOut;
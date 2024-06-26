import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const url = `https://doctors-portal-server-lemon.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p className='flex justify-center'><span className="loading loading-infinity loading-lg "></span></p>
    }

    return (
        <div>
            <h2 className='text-3xl my-6 ms-5'>My Appointment</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(bookings) && bookings.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.username}</td>
                                    <td>{booking.selectedTreatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashboard/bookings/${booking._id}`}>
                                                <button
                                                    className='btn btn-secondary btn-sm btn-outline'>
                                                    Purchase
                                                </button></Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-secondary'>Paid</span>
                                        }

                                    </td>


                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;

import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Treatment = ({ treatment, setTreatment, formattedDate, refetch }) => {
    const { name: treatmentName, slots, } = treatment;
    const { user } = useContext(AuthContext)
    const date = format(formattedDate, 'PP')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const selectedTreatment = treatmentName;
        console.log(username, phone, email, slot);

        const patientData = {
            appointmentDate: date,
            username,
            email,
            phone,
            slot,
            selectedTreatment
        }
        console.log(patientData)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(patientData),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking Confirmed')
                    setTreatment(null)
                    refetch()
                }
                else {
                    toast.error(`You already have an appointment on ${date}`)
                }
            })
            .catch(error => console.error(error));
    }
    return (
        <>
            <input type="checkbox" id="treatmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="treatmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-accent">{treatmentName}</h3>

                    <form onSubmit={handleSubmit} className='grid gap-3 grid-cols-1 my-6'>
                        <input type="text" readOnly placeholder="Type here" value={date} className="input input-bordered input-accent text-black w-full" />
                        <select name='slot' className="select select-accent w-full">

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" readOnly defaultValue={user?.displayName} name='username' placeholder="Full Name" className="input input-bordered input-accent w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="email" readOnly defaultValue={user?.email} name='email' placeholder="Email" className="input input-bordered input-accent w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Treatment;
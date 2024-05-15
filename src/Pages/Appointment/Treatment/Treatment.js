import React from 'react';

const Treatment = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots, } = treatment;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const selectedTreatment = name;
        console.log(username, phone, email, slot);

        const patientData = {
            appointmentDate: selectedDate,
            username,
            email,
            phone,
            slot,
            selectedTreatment
        }
        console.log(patientData)
        setTreatment(null)
    }
    return (
        <>
            <input type="checkbox" id="treatmentModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="treatmentModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-accent">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid gap-3 grid-cols-1 my-6'>
                        <input type="text" readOnly placeholder="Type here" value={selectedDate} className="input input-bordered input-accent text-black w-full" />
                        <select name='slot' className="select select-accent w-full">

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='username' placeholder="Full Name" className="input input-bordered input-accent w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered input-accent w-full" />
                        <input type="submit" value="Submit" className='btn btn-accent' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Treatment;
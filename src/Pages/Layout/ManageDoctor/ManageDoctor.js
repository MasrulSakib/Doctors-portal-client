import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const ManageDoctor = () => {
    const [removeDoctor, setRemoveDoctor] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`,
                    }
                });
                const data = await res.json()
                return data;
            }

            catch (error) {
                console.error(error);
            }
        }
    })
    if (isLoading) {
        return <p className='flex justify-center'><span className="loading loading-infinity loading-lg "></span></p>
    }

    const closeModal = () => {
        setRemoveDoctor(null);
    }

    const successDelete = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} is removed successfully`);
                }
            })
    }

    return (
        <div>
            <h2 className='text-4xl font-semibold'>Doctors Portal: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Spaciality</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            doctors &&
                            doctors.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-16 h-16">
                                                    <img src={doctor.imageurl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {doctor.name}
                                    </td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.email}</td>
                                    <th>
                                        <label htmlFor="remove-Doctor" className="btn btn-error btn-sm" onClick={() => setRemoveDoctor(doctor)}>Delete</label>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                </table>
                {
                    removeDoctor &&
                    <ConfirmationModal
                        title={`Are you sure you want to delete ${removeDoctor.name}`}
                        massege={'If you remove this person from server, this can not be undone'}
                        closeModal={closeModal}
                        successDelete={successDelete}
                        modalData={removeDoctor}
                    >
                    </ConfirmationModal>
                }
            </div>

        </div>
    );
};

export default ManageDoctor;
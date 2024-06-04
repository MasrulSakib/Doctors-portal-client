import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-lemon.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    const handleAdmin = (id) => {
        fetch(`https://doctors-portal-server-lemon.vercel.app/users/admin/id/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User Role Updated')
                    refetch();
                }
            })

    }

    const handleDelete = (user) => {
        fetch(`https://doctors-portal-server-lemon.vercel.app/users/${user?._id}`, {
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
                    toast.success(`User is removed successfully`);
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Panal</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{!user?.role && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-outline btn-secondary whitespace-nowrap'>Make Admin</button>}</td>
                                    {/* <td><button onClick={() => handleDelete(user)} className='btn btn-xs btn-accent btn-outline'>Delete</button></td> */}
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-lemon.vercel.app/users');
            if (!res.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await res.json();
            return data;
        }
    });

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
                    toast.success('User role updated');
                    refetch();
                }
            })
            .catch(error => {
                console.error('Error updating user role:', error);
                toast.error('Failed to update user role');
            });
    };


    const handleDelete = (user) => {
        fetch(`https://doctors-portal-server-lemon.vercel.app/users/${user?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to delete user');
                }
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    toast.success('User removed successfully');
                    refetch();
                } else {
                    toast.error(data.message || 'Failed to delete user');
                }
            })
            .catch(error => {
                console.error('Error deleting user:', error);
                toast.error('Failed to delete user');
            });
    };

    if (isLoading) {
        return <p>Loading...</p>;
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
                            <th>Admin Panel</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user?.email}</td>
                                <td>{!user?.role && <button onClick={() => handleAdmin(user._id)} className='btn btn-xs btn-outline btn-secondary whitespace-nowrap'>Make Admin</button>}</td>
                                <td><button onClick={() => handleDelete(user)} className='btn btn-xs btn-accent btn-outline'>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

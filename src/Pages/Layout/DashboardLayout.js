import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import { RiMenuUnfold3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="flex">
                        <label
                            htmlFor="dashboard-drawer"
                            role="button"
                            className="btn btn-sm btn-outline rounded-lg btn-ghost m-4 drawer-button lg:hidden"
                        >
                            Menu
                            <RiMenuUnfold3Line className='text-xl' />
                        </label>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side" style={{ top: 'auto' }}>
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex justify-end p-4 lg:hidden">
                        <label htmlFor="dashboard-drawer" role="button" className="btn btn-circle btn-outline">
                            <IoClose className="text-xl" />
                        </label>
                    </div>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li className="lg:hidden flex items-end mb-4">
                            <label htmlFor="dashboard-drawer" role="button" className="btn btn-sm btn-circle btn-outline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </label>
                        </li>
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {isAdmin && (
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add Doctors</Link></li>
                                <li><Link to='/dashboard/managedoctor'>Manage Doctors</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

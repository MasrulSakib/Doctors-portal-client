import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="dashborad-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side" style={{ top: 'auto' }}>
                        <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><Link to='/dashboard'>My Appointments</Link></li>
                            {
                                isAdmin && <>
                                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                    <li><Link to='/dashboard/adddoctor'>Add Doctors</Link></li>
                                    <li><Link to='/dashboard/managedoctor'>Manage Doctors</Link></li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Shared/Home/Home"
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import SignUp from "../Pages/Register/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../Pages/Layout/DashboardLayout";
import MyAppointment from "../Pages/Layout/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateAdmin from "./PrivateAdmin/PrivateAdmin";
import AddDoctor from "../Pages/Layout/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/Layout/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Layout/ManageDoctor/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>
            },
            {
                path: '/dashboard/adddoctor',
                element: <PrivateAdmin><AddDoctor></AddDoctor></PrivateAdmin>
            },
            {
                path: '/dashboard/managedoctor',
                element: <PrivateAdmin><ManageDoctor></ManageDoctor></PrivateAdmin>
            },
            {
                path: '/dashboard/bookings/:id',
                element: <PrivateAdmin><Payment></Payment></PrivateAdmin>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-lemon.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])

export default router;
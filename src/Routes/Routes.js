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
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>
            },
        ]
    }
])

export default router;
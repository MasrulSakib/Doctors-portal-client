import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Shared/Home/Home"
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import SignUp from "../Pages/Register/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
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
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
])

export default router;
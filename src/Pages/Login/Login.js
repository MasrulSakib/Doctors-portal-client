import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { userSignIn } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [userLoginEmail, setUserLoginEmail] = useState('')
    const [token] = useToken(userLoginEmail);

    if (token) {
        navigate(from, { replace: true })
        toast.success('User Login Successful')

    }

    const handleLogin = data => {
        console.log(data)
        setError('')
        userSignIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUserLoginEmail(data?.email)

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <section className='h-[800px] flex justify-center items-center'>

            <div className='p-7 w-96 shadow-2xl rounded-xl'>
                <h2 className='text-2xl text-center font-semibold'>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)} className=''>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input {...register("email", { required: "Email Address is required" })}
                            type="text" placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error' role="alert">{errors.email.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 charecters or longer' },

                        })}
                            type="password" placeholder="Your Password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error' role="alert">{errors.password.message}</p>}
                    </label>

                    <button className='btn btn-accent w-full my-10' type='submit'>LOGIN</button>
                    <p className='text-red-600 text-center'>{error &&
                        <span > {error}</span>
                    }</p>
                    <p className='text-center'>New to Doctors Portal? <Link to='/register' className='text-secondary font-semibold'>Create New Account</Link></p>


                </form>
                <div className="divider divider-accent mb-10">OR</div>
                <button className='w-full btn btn-outline btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </section>
    );
};

export default Login;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = event => {
        console.log(event)
    }

    return (
        <section className='h-[800px] flex justify-center items-center'>

            <div className='p-7 w-96 shadow-2xl rounded-xl'>
                <h2 className='text-2xl text-center font-semibold'>LOGIN</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input {...register("email")} type="text" placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input {...register("password")} type="password" placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </label>

                    <p></p>
                    <button className='btn btn-accent w-full my-10' type='submit'>LOGIN</button>
                    <p className='text-center'>New to Doctors Portal? <Link className='text-secondary font-semibold'>Create New Account</Link></p>
                </form>
                <div className="divider divider-accent mb-10">OR</div>
                <button className='w-full btn btn-outline btn-primary'>CONTINUE WITH GOOGLE</button>
            </div>
        </section>
    );
};

export default Login;
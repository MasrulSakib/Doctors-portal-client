import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [userCreatedEmail, setUserCreatedEmail] = useState('')
    const [token] = useToken(userCreatedEmail);
    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userProfile = {
                    displayName: data.name,
                }
                updateUser(userProfile)
                    .then(() => {
                        saveUsers(data.name, data.email)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error));

    }
    const saveUsers = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-lemon.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserCreatedEmail(email)
            })

    }



    return (
        <section className='h-[800px] flex justify-center items-center'>

            <div className='p-7 w-96 shadow-2xl rounded-xl'>
                <h2 className='text-2xl text-center font-semibold'>REGISTER</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input {...register("name", { required: "Username is required" })}
                            type="text" placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error' role="alert">{errors.name.message}</p>}
                    </label>
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
                            pattern: { value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, message: 'Password must be strong' }
                        })}
                            type="password" placeholder="Your Password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error' role="alert">{errors.password.message}</p>}
                    </label>

                    <p></p>
                    <button className='btn btn-accent w-full my-10' type='submit'>SIGN UP</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
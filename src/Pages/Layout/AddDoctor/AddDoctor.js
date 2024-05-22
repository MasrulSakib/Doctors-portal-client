import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    // const imageHostKey = process.env.REACT_APP_imgbb;

    const { data: specialities, isLoading } = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/specially')
            const data = await res.json()
            return data;
        }
    })



    const handleSignUp = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.option,
                        imageurl: imgData.data.url

                    }

                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`,
                        },

                        body: JSON.stringify(doctor)
                    })

                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is successfully added`)
                            navigate('/dashboard/managedoctor')
                        })
                }
            })
            .catch(error => console.error(error))
    }



    if (isLoading) {
        return <p className='flex justify-center'><span className="loading loading-infinity loading-lg "></span></p>;
    }

    return (
        <div className='flex min-h-screen justify-center items-center'>

            <div className='p-7 w-96 shadow-2xl rounded-xl'>
                <h2 className="text-3xl ms-4 text-center font-semibold">Add Doctors</h2>
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
                            <span className="label-text">Speciality</span>
                        </div>
                        <select {...register("option", { required: "Choose a option" })} className="select select-bordered w-full max-w-xs">
                            {
                                specialities.map(speciality => <option
                                    key={speciality._id}
                                    value={speciality.name}
                                >{speciality.name}</option>)
                            }

                        </select>
                        {errors.option && <p className='text-error' role="alert">{errors.option.message}</p>}
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo</span>
                        </div>
                        <input {...register("image", { required: "Photo is required" })}
                            type="file" placeholder="Your Photo"
                            className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-error' role="alert">{errors.image.message}</p>}
                    </label>

                    <p></p>
                    <button className='btn btn-accent w-full my-10' type='submit'>Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentData from '../AppointmentData/AppointmentData';
import Treatment from '../Treatment/Treatment';
import { useQuery } from '@tanstack/react-query';

const AppointmentServices = ({ formattedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(formattedDate, 'PP');
    const { data: servicesData = [], refetch, isLoading } = useQuery({
        queryKey: ['servicesData', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dentalServices?date=${date}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <p className='flex justify-center'><span className="loading loading-infinity  loading-lg"></span></p>
    }

    return (
        <section>
            <div className='text-center my-32'>
                <p className='font-semibold text-secondary'>Available Services on {format(formattedDate, 'PP')}</p>
                <h2 className='font-light'>Please select a service.</h2>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32 md:container md:mx-auto mx-4'>
                {
                    servicesData.map(service => <AppointmentData
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentData>)
                }
            </div>
            {
                treatment &&
                <Treatment
                    treatment={treatment}
                    setTreatment={setTreatment}
                    formattedDate={formattedDate}
                    refetch={refetch}
                ></Treatment>
            }
        </section>
    );
};

export default AppointmentServices;
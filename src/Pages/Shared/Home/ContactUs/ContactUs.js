import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
import ButtonLayout from '../../../../components/ButtonLayout/ButtonLayout';

const ContactUs = () => {
    return (
        <section
            className='my-32'
            style={
                {
                    background: `url(${appointment})`
                }
            }>
            <div className='py-20'>
                <div className=' text-center mb-10'>
                    <p className='text-secondary font-semmibold'>Contact Us</p>
                    <h2 className='text-4xl text-white font-light mb-3'>Stay connected with us</h2>
                </div>
                <form className='flex flex-col justify-center items-center gap-4'>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                    <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your Message"></textarea>
                    <ButtonLayout>Submit</ButtonLayout>
                </form>
            </div>

        </section>
    );
};

export default ContactUs;
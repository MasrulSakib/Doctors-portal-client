import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section style={
            {
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }
        }>
            <div>
                <footer className="footer p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <Link to='/' className="link link-hover">Branding</Link>
                        <Link to='/' className="link link-hover">Design</Link>
                        <Link to='/' className="link link-hover">Marketing</Link>
                        <Link to='/' className="link link-hover">Advertisement</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <Link to='/' className="link link-hover">About us</Link>
                        <Link to='/' className="link link-hover">Contact</Link>
                        <Link to='/' className="link link-hover">Jobs</Link>
                        <Link to='/' className="link link-hover">Press kit</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link to='/' className="link link-hover">Terms of use</Link>
                        <Link to='/' className="link link-hover">Privacy policy</Link>
                        <Link to='/' className="link link-hover">Cookie policy</Link>
                    </nav>
                </footer>

                <aside className='text-center mt-32 mb-4'>
                    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                </aside>

            </div>
        </section>
    );
};

export default Footer;
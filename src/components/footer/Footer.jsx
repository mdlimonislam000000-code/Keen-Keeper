import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='container mx-auto mt-7 '>
            <footer className=" bg-[#1a8862] footer footer-horizontal footer-center  text-base-content rounded p-10">
                <h1 className='text-7xl text-[#ffff] font-bold'>KeenKeeper</h1>
                <p className='-mt-5 text-[#ffff] text-[1.1rem] font-normal'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <nav className='-mt-5'>
                    <p className='text-[#ffff] text-[1.3rem] font-medium'>Social Links:</p>
                    <div className="  grid grid-flow-col gap-4 text-3xl">
                        <a className='bg-[#ffff] p-2 rounded'>
                            <FaInstagramSquare />
                        </a>
                        <a className='bg-[#ffff] p-2 rounded'>
                            <FaFacebookSquare />
                        </a>
                        <a className='bg-[#ffff] p-2 rounded'>
                            <FaXTwitter />
                        </a>
                    </div>
                </nav>
                <div className='flex justify-between w-full '>
                    <div>
                        <aside>
                            <p className='text-[#fafafa]'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                        </aside>
                    </div>
                    <div className='flex justify-around gap-10 text-[#fafafa]'>
                        <p >Privacy policy</p>
                        <p>Terms of service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
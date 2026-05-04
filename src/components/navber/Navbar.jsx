'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from 'react-icons/md';



const Navbar = () => {

    const pathName = usePathname();

    const links = <>
        <li >
            <Link href='/' className={pathName === '/' ? 'font-bold text-white bg-[#244d3f] p-2 rounded ' : ''}>
                <p className='text-[1.1rem] flex items-center gap-2'> <IoHome /> Home</p>
            </Link>
        </li>

        <li >
            <Link href='/timeline' className={pathName === '/timeline' ? 'text-white bg-[#244d3f] font-bold p-2 rounded ' : ''}>
                <p className='text-[1.1rem] flex items-center gap-2'> <MdOutlineAccessTimeFilled /> Timeline</p>
            </Link>
        </li>

        <li >
            <Link href='/stats' className={pathName === '/stats' ? 'text-white bg-[#244d3f] font-bold p-2 rounded ' : ''}>
                <p className='text-[1.1rem] flex items-center gap-2'> <ImStatsDots />Stats</p>
            </Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href='./' className="btn btn-ghost text-xl text-[#1f2937]">KeenKeeper</Link>
            </div>
            <div className="navbar-end gap-7 hidden lg:flex">
                <ul className=" menu menu-horizontal mr-5 gap-14  flex px-1">
                    {links}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;
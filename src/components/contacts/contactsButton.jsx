'use client'
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { CallContext } from '@/context/callcontext';
import { useRouter } from "next/navigation";
import { MdCall } from 'react-icons/md';
import { FaEnvelopeOpenText, FaVideo } from 'react-icons/fa';



const ContactButton = ({ friend }) => {
    const { callData, setCallData } = useContext(CallContext);
    const router = useRouter();

    const showToast = (type) => {
        toast.success(`${type} with ${friend.name} successfully!`, {
            style: {
                borderRadius: '10px',
                background: '#134e4a',
                color: '#fff',
            },
        });
    };

    const handelCallNow = (type, icon) => {
        if (friend) {
            const newEntry = {
                id: Date.now(),
                type: type,
                name: friend.name,
                icon: icon,
                date: new Date().toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }),
            };
            setCallData((prevData) => [newEntry, ...prevData]);

            showToast(type);
        }

    }


    return (
        <div className='mt-4 mb-3 lg:mt-10 bg-amber-50 p-5 lg:p-7 rounded'>
            <p className='text-[1.2rem] font-bold'>Quick Check-In:</p>

            <div className='lg:flex  justify-between '>
                <div onClick={() => handelCallNow('Call', <MdCall />)} className='bg-white px-7 lg:px-10 py-5 lg:py-7 mt-5 rounded-2xl btn btn-ghost mr-11 lg:mr-0'>
                    <button className=''>Call</button>
                </div>

                <div onClick={() => handelCallNow('Text', <FaEnvelopeOpenText />)} className='bg-white px-7 lg:px-10 py-5 lg:py-7 mt-5 rounded-2xl btn btn-ghost'>
                    <p>Text</p>
                </div>

                <div onClick={() => handelCallNow('Video', <FaVideo />)} className='bg-white px-7 lg:px-10 py-5 lg:py-7 mt-5 rounded-2xl btn btn-ghost'>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default ContactButton;

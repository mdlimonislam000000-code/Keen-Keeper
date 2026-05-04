'use client'
import { useContext } from 'react';
import { CallContext } from '@/context/callcontext';
import { useRouter } from "next/navigation";
import { MdCall } from 'react-icons/md';
import { FaEnvelopeOpenText, FaVideo } from 'react-icons/fa';


const ContactButton = ({ friend }) => {
    const { callData, setCallData } = useContext(CallContext);
    const router = useRouter();

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
            
            console.log(friend)
            alert(`${friend.name} You are calling`);
        }

    }


    return (
        <div className='mt-10 bg-amber-50 p-7 rounded'>
            <p className='text-[1.2rem] font-bold'>Quick Check-In:</p>

            <div className='flex justify-between '>
                <div onClick={() => handelCallNow('Call', <MdCall />)} className='bg-white px-10 py-7 mt-5 rounded-2xl btn btn-ghost'>
                    <button className=''>Call</button>
                </div>

                <div onClick={() => handelCallNow('Text', <FaEnvelopeOpenText />)} className='bg-white px-10 py-7 mt-5 rounded-2xl btn btn-ghost'>
                    <p>Text</p>
                </div>

                <div onClick={() => handelCallNow('Video', <FaVideo />)} className='bg-white px-10 py-7 mt-5 rounded-2xl btn btn-ghost'>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default ContactButton;

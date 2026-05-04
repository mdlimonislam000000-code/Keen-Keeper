'use client'
import { CallContext } from '@/context/callcontext';
import React, { useContext } from 'react';

const TimeLinePage = () => {
    const {callData} = useContext(CallContext)
    return (
        <div className='container mx-auto mt-10'>
            <p className='text-[1.5rem] font-bold mb-9'>Timeline : </p>

            {
                callData.map((item)=> (
                    <div key={item.id} className='flex gap-8 p-5 mb-5 rounded bg-amber-50 items-center'>
                        <div>
                            {item.icon}
                        </div>

                        <div>
                            <p>meetup with <span className='text-[1.2rem] font-bold'>{item.name}</span></p>                            <p>{item.date}</p>                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default TimeLinePage;
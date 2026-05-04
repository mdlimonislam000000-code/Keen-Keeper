'use client'
import { CallContext } from '@/context/callcontext';
import React, { useContext, useState } from 'react';

const TimeLinePage = () => {
    const { callData } = useContext(CallContext)
    const [filter, setFilter] = useState('All');

    const filteredData = callData.filter(item => {
        if (filter === 'All') return true;
        return item.type === filter;
    });

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#1e293b]">Timeline</h1>

            <div className="mb-8">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered w-full max-w-xs bg-white border-gray-200 focus:outline-none"
                >
                    <option value="All"> All </option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

        
            <div className="flex flex-col gap-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-5 p-5 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow"
                        >
                            <div className="text-3xl bg-amber-50 p-3 rounded-xl ">
                                {item.icon}
                            </div>

                            <div className="flex flex-col">
                                <p className="text-[1.1rem] font-bold text-gray-800">
                                    {item.type} <span className="text-gray-500 font-normal">with <span className='font-medium'>{item.name}</span></span>
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 border-dashed rounded-3xl bg-gray-50 ">
                        <p className="text-gray-500 font-medium">
                            No {filter === 'All' ? ' Data' : filter.toLowerCase() + 's'} found.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLinePage;
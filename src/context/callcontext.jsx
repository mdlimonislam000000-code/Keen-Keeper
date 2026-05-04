'use client';
import { createContext, useState } from 'react';

export const CallContext = createContext();

export const CallProvider = ({ children }) => {

    const [callData, setCallData] = useState([]);
    const addToTimeline = (newEntry) => {
        setCallData((prevData) => [newEntry, ...prevData]);
    };

    return (
        <CallContext.Provider value={{ callData, setCallData, addToTimeline }}>
            {children}
        </CallContext.Provider>
    );
};
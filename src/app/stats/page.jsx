'use client'
import { CallContext } from '@/context/callcontext';
import { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';


const page = () => {

    const { callData } = useContext(CallContext)

    const totalCalls = callData.filter(item => item.type === 'Call').length;
    const totalTexts = callData.filter(item => item.type === 'Text').length;
    const totalVideos = callData.filter(item => item.type === 'Video').length;


    const data = [
        { name: 'Calls', value: totalCalls, fill: '#0088FE' },
        { name: 'Texts', value: totalTexts, fill: '#00C49F' },
        { name: 'Videos', value: totalVideos, fill: '#FFBB28' },

    ];


    return (
        <div className='container mx-auto'>
            <p className='text-center text-[#1f2937] text-[2rem] lg:text-[3rem] mt-4  lg:mt-10 font-bold'>Friendship Analytics</p>
           

            <div className=' shadow-md transition-shadow  rounded-4xl p-4 lg:p-9 flex mx-auto flex-col my-4 lg:my-10' style={{ width: '100%', maxWidth: '500px', aspectRatio: 1 }}>

                <div>
                    <p className='text-[1.2rem] font-bold text-[#244d3f] text-center mb-5'>By Interaction Type</p>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    
                    <PieChart>
                        
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default page;
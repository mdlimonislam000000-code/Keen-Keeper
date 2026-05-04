import React from 'react';

const Cards = () => {
    return (
        <div className='container mx-auto  '>
            <div className="justify-items-center ">
                <div className=" grid grid-cols-2 lg:grid-cols-4 text-center gap-5 lg:gap-25 mt-2 p-3 lg:mt-9">
                    <div className="border-none max-w-45 p-3 lg:p-5 rounded-2xl bg-[#f5eeee]">
                        <p className="text-[#244d3f] text-[1.2rem] lg:text-[1.6rem] font-bold">10</p>
                        <p className="text-[#64748b] text-[14px] lg:text-[18px]">Total friends</p>
                    </div>

                    <div className="border-none max-w-45 p-5 rounded-2xl bg-[#f5eeee]">
                        <p className="text-[#244d3f] text-[1.2rem] lg:text-[1.6rem] font-bold" >3</p>
                        <p className="text-[#64748b] text-[14px] lg:text-[18px]">On track</p>
                    </div>

                    <div className="border-none max-w-45 p-5 rounded-2xl bg-[#f5eeee]">
                        <p className="text-[#244d3f] text-[1.2rem] lg:text-[1.6rem] font-bold">6</p>
                        <p className="text-[#64748b] text-[14px] lg:text-[18px]">Need Attention</p>
                    </div>

                    <div className="border-none max-w-45 p-5 rounded-2xl bg-[#f5eeee]">
                        <p className="text-[#244d3f] text-[1.2rem] lg:text-[1.6rem] font-bold">12</p>
                        <p className="text-[#64748b] text-[14px] lg:text-[18px]">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
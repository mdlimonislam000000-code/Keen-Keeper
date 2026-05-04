import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="text-center mt-15">
                <h1 className="text-[3rem] font-bold text-[#1f2937] ">Friends to keep close in your life</h1>
                <p className="text-[14px] text-[#64748b] mt-3 max-w-96 mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className="btn btn-info mt-4 bg-[#244d3f] text-white">+ Add a friend</button>
            </div>
        </div>
    );
};

export default Banner;
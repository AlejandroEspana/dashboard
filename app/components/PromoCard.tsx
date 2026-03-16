'use client';

import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const PromoCard = () => {
  return (
    <div className="bg-[linear-gradient(135deg,_#6366f1_0%,_#4f46e5_100%)] rounded-3xl p-8 flex relative overflow-hidden shadow-primary text-white min-h-[220px]">
      
      <div className="relative z-10 w-[60%] pt-2">
        <h3 className="font-outfit text-xl font-semibold m-0 mb-2">Need More Stats?</h3>
        <p className="text-[13px] text-white/80 mb-6 font-inter">Upgrade to pro for added benefits.</p>
        <button className="bg-success text-white border-none px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2 cursor-pointer shadow-success transition-transform hover:-translate-y-0.5">
          <span className="bg-white text-success rounded-full p-[2px] w-4 h-4 flex items-center justify-center">
            <FiArrowUp className="stroke-[3] text-xs" />
          </span> 
          Go Pro Now
        </button>
      </div>
      
      <div className="absolute right-0 top-0 w-[50%] h-full z-0">
        
        {/* Clouds */}
        <div className="absolute bg-white rounded-[20px] opacity-90 w-10 h-4 bottom-5 right-[120px]">
          <div className="absolute bg-white w-6 h-6 rounded-full -top-3 left-2"></div>
        </div>
        <div className="absolute bg-white rounded-[20px] opacity-90 w-[50px] h-[18px] bottom-10 right-5">
          <div className="absolute bg-white w-7 h-7 rounded-full -top-4 left-2.5"></div>
        </div>
        
        {/* Road line */}
        <div className="absolute -bottom-5 right-10 w-[60px] h-[160px] bg-[#1a1b35] rounded-[30px] rotate-[5deg] [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_10px,white_10px,white_20px)] opacity-50"></div>
        </div>
        
        {/* Arrows */}
        <div className="absolute top-5 right-[50px] w-10 h-10 bg-white [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        
        <div className="absolute bottom-[60px] right-[110px] w-4 h-4 bg-white opacity-80 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        <div className="absolute top-[80px] right-2.5 w-4 h-4 bg-white opacity-80 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

        {/* Abstract person */}
        <div className="absolute top-10 right-20">
          <div className="w-5 h-[35px] bg-[#fd7e14] rounded-t-[10px]"></div>
          <div className="w-4 h-4 bg-[#ffc107] rounded-full absolute -top-[18px] left-[2px]"></div>
        </div>

      </div>

    </div>
  );
};

export default PromoCard;
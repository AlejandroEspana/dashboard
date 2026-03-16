'use client';

import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const PromoCard = () => {
  return (
    <div className="bg-[#5247ed] rounded-[28px] p-[28px] xl:p-[32px] flex relative overflow-hidden shadow-primary text-white min-h-[200px] xl:min-h-[220px]">
      
      <div className="relative z-10 w-full sm:w-[60%] pt-2">
        <h3 className="font-outfit text-[22px] font-bold m-0 mb-[6px] tracking-tight">Need More Stats?</h3>
        <p className="text-[13px] text-white/80 mb-6 font-inter tracking-wide">Upgrade to pro for added benefits.</p>
        <button className="bg-success text-white border-none px-5 py-[12px] rounded-full text-[13px] font-bold flex items-center gap-[10px] cursor-pointer shadow-success transition-transform hover:-translate-y-0.5">
          <span className="bg-white text-success rounded-full p-[3px] w-[18px] h-[18px] flex items-center justify-center">
            <FiArrowUp className="stroke-[4] text-[12px]" />
          </span> 
          Go Pro Now
        </button>
      </div>
      
      <div className="hidden sm:block absolute right-0 top-0 w-[50%] h-full z-0">
        
        {/* Clouds */}
        <div className="absolute bg-white rounded-[20px] opacity-90 w-11 h-4 bottom-[28px] right-[140px]">
          <div className="absolute bg-white w-7 h-7 rounded-full -top-4 left-2"></div>
        </div>
        <div className="absolute bg-white rounded-[20px] opacity-90 w-[54px] h-[20px] bottom-[46px] right-6">
          <div className="absolute bg-white w-8 h-8 rounded-full -top-[18px] left-[10px]"></div>
        </div>
        
        {/* Road line */}
        <div className="absolute -bottom-8 right-12 w-[70px] h-[190px] bg-[#1a1c3a] rounded-[35px] rotate-[10deg] [clip-path:polygon(20%_0,80%_0,100%_100%,0_100%)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[5px] h-full bg-[repeating-linear-gradient(to_bottom,transparent,transparent_14px,white_14px,white_28px)] opacity-[0.35]"></div>
        </div>
        
        {/* Arrows */}
        <div className="absolute top-[26px] right-[62px] w-[46px] h-[46px] bg-white [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        
        <div className="absolute bottom-[66px] right-[130px] w-5 h-5 bg-white opacity-80 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>
        <div className="absolute top-[96px] right-3 w-[18px] h-[18px] bg-white opacity-80 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

        {/* Abstract person */}
        <div className="absolute top-[52px] right-[94px]">
          <div className="w-[22px] h-[38px] bg-[#fd7e14] rounded-t-xl opacity-90"></div>
          <div className="w-[18px] h-[18px] bg-[#ffc107] rounded-full absolute -top-5 left-0.5"></div>
        </div>

      </div>

    </div>
  );
};

export default PromoCard;
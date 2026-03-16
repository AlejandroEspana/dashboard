'use client';

import React from 'react';
import { FiShoppingCart, FiUsers, FiShoppingBag, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
      
      {/* Total Sales Card */}
      <div className="bg-white rounded-[28px] p-[26px] flex items-center shadow-card border border-white/50 hover:shadow-lg transition-shadow">
        <div className="w-[62px] h-[62px] min-w-[62px] rounded-full flex items-center justify-center bg-primary-light text-primary text-[26px] mr-[22px]">
          <FiShoppingCart />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[13px] text-text-secondary font-semibold mb-1 tracking-wide">Total Sales</div>
          <div className="flex items-center justify-between xl:justify-start xl:gap-4 w-full">
            <span className="font-outfit text-[32px] font-bold text-text-primary leading-none tracking-tight">263k</span>
            <span className="flex items-center text-success text-[13px] font-bold">
              <FiArrowUp className="mr-1 text-[13px] stroke-[4]" /> 15.6%
            </span>
          </div>
        </div>
      </div>

      {/* Total Visitors Card */}
      <div className="bg-white rounded-[28px] p-[26px] flex items-center shadow-card border border-white/50 hover:shadow-lg transition-shadow">
        <div className="w-[62px] h-[62px] min-w-[62px] rounded-full flex items-center justify-center bg-[#f3f0ff] text-[#7b61ff] text-[26px] mr-[22px]">
          <FiUsers />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[13px] text-text-secondary font-semibold mb-1 tracking-wide">Total Visitors</div>
          <div className="flex items-center justify-between xl:justify-start xl:gap-4 w-full">
            <span className="font-outfit text-[32px] font-bold text-text-primary leading-none tracking-tight">35k</span>
            <span className="flex items-center text-danger text-[13px] font-bold">
              <FiArrowDown className="mr-1 text-[13px] stroke-[4]" /> 6.2%
            </span>
          </div>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className="bg-white rounded-[28px] p-[26px] flex items-center shadow-card border border-white/50 hover:shadow-lg transition-shadow">
        <div className="w-[62px] h-[62px] min-w-[62px] rounded-full flex items-center justify-center bg-primary-light text-primary text-[26px] mr-[22px]">
          <FiShoppingBag />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-[13px] text-text-secondary font-semibold mb-1 tracking-wide">Total Orders</div>
          <div className="flex items-center justify-between xl:justify-start xl:gap-4 w-full">
            <span className="font-outfit text-[32px] font-bold text-text-primary leading-none tracking-tight">165k</span>
            <span className="flex items-center text-success text-[13px] font-bold">
              <FiArrowUp className="mr-1 text-[13px] stroke-[4]" /> 3.5%
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KPICards;

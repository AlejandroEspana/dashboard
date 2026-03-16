'use client';

import React from 'react';
import { FiShoppingCart, FiUsers, FiShoppingBag, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const KPICards = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      
      {/* Total Sales Card */}
      <div className="bg-white rounded-3xl p-6 lg:px-8 flex items-center gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary-light text-primary text-2xl">
          <FiShoppingCart />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-text-secondary font-semibold mb-2">Total Sales</div>
          <div className="flex items-center gap-3">
            <span className="font-outfit text-3xl font-bold text-text-primary leading-none">263k</span>
            <span className="flex items-center text-success text-[13px] font-semibold">
              <FiArrowUp className="mr-1 text-sm stroke-[3]" /> 15.6%
            </span>
          </div>
        </div>
      </div>

      {/* Total Visitors Card */}
      <div className="bg-white rounded-3xl p-6 lg:px-8 flex items-center gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#f3f0ff] text-[#7b61ff] text-2xl">
          <FiUsers />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-text-secondary font-semibold mb-2">Total Visitors</div>
          <div className="flex items-center gap-3">
            <span className="font-outfit text-3xl font-bold text-text-primary leading-none">35k</span>
            <span className="flex items-center text-danger text-[13px] font-semibold">
              <FiArrowDown className="mr-1 text-sm stroke-[3]" /> 6.2%
            </span>
          </div>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className="bg-white rounded-3xl p-6 lg:px-8 flex items-center gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary-light text-primary text-2xl">
          <FiShoppingBag />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-text-secondary font-semibold mb-2">Total Orders</div>
          <div className="flex items-center gap-3">
            <span className="font-outfit text-3xl font-bold text-text-primary leading-none">165k</span>
            <span className="flex items-center text-success text-[13px] font-semibold">
              <FiArrowUp className="mr-1 text-sm stroke-[3]" /> 3.5%
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KPICards;

'use client';

import React from 'react';
import { FiHome, FiCalendar, FiDownloadCloud } from 'react-icons/fi';
import KPICards from './KPICards';
import SessionsChart from './SessionsChart';
import PromoCard from './PromoCard';
import ConversionCard from './ConversionCard';

const DashboardGrid = () => {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-text-primary text-white w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
            <FiHome />
          </div>
          <h1 className="text-3xl m-0 text-text-primary">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white border border-border px-5 py-3 rounded-full text-sm font-medium text-text-secondary cursor-pointer gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:bg-gray-50">
            <FiCalendar className="text-base" />
            <span>This Month</span>
            <span className="text-[10px]">&#9662;</span>
          </div>
          <button className="flex items-center bg-success text-white border-none px-6 py-3 rounded-full text-sm font-semibold cursor-pointer gap-3 shadow-success transition-transform hover:-translate-y-0.5">
            <FiDownloadCloud className="text-base" />
            Download Report
          </button>
        </div>
      </div>

      <div className="bg-[#f6f7fb] rounded-[40px] p-6 lg:p-8">
        <KPICards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 flex flex-col">
            <SessionsChart />
          </div>
          <div className="flex flex-col gap-6">
            <PromoCard />
            <ConversionCard />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardGrid;

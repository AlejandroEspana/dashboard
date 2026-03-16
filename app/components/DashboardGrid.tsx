'use client';

import React from 'react';
import { FiHome, FiCalendar, FiDownloadCloud } from 'react-icons/fi';
import KPICards from './KPICards';
import SessionsChart from './SessionsChart';
import PromoCard from './PromoCard';
import ConversionCard from './ConversionCard';

const DashboardGrid = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-text-primary text-white w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[26px] shadow-sm">
            <FiHome />
          </div>
          <h1 className="text-[32px] m-0 text-text-primary font-bold tracking-tight">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <div className="flex items-center bg-white border border-border px-5 py-[14px] rounded-full text-[14px] font-semibold text-text-secondary cursor-pointer gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:bg-gray-50 flex-shrink-0 transition-colors">
            <FiCalendar className="text-[17px] text-text-primary" />
            <span>This Month</span>
            <span className="text-[11px] ml-1">&#9662;</span>
          </div>
          <button className="flex items-center bg-success text-white border-none px-6 py-[14px] rounded-full text-[14px] font-bold cursor-pointer gap-[10px] shadow-success transition-transform hover:-translate-y-0.5 flex-shrink-0">
            <FiDownloadCloud className="text-[18px] stroke-[2.5]" />
            Download Report
          </button>
        </div>
      </div>

      {/* Main Grid Wrapper */}
      <div className="bg-white xl:bg-[#f8f9fc] rounded-[40px] xl:p-8 w-full">
        <KPICards />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6 xl:mt-8">
          <div className="xl:col-span-2 flex flex-col h-full min-w-0">
            <SessionsChart />
          </div>
          <div className="flex flex-col gap-6 xl:gap-8 h-full min-w-0">
            <PromoCard />
            <ConversionCard />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardGrid;

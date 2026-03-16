'use client';

import React from 'react';
import { 
  FiHome, FiShoppingBag, FiBox, FiBarChart2, FiPieChart, FiMessageSquare,
  FiSlack, FiLogOut, FiChevronLeft, FiChevronDown
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-screen fixed left-0 top-0 bg-white flex flex-col px-6 py-8 md:border-r border-[#f1f2f6] z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 shadow-2xl lg:shadow-none">
      
      {/* Logo Section */}
      <div className="flex justify-between items-center mb-10 pl-2">
        <div className="flex items-center gap-3">
          <div className="w-[34px] h-[34px] flex items-center justify-center text-white bg-[#f2a815] font-outfit font-bold text-lg rounded-[10px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            R
          </div>
          <span className="font-outfit font-bold text-[22px] tracking-tight text-text-primary">flex</span>
        </div>
        <button className="w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center text-text-secondary cursor-pointer hover:bg-gray-50 lg:block hidden">
          <FiChevronLeft className="text-sm" />
        </button>
      </div>

      {/* Menu Section */}
      <div className="mb-8 pl-2">
        <div className="text-[12px] text-text-secondary font-semibold mb-4 capitalize tracking-wide">Menu</div>
        <nav className="flex flex-col gap-[6px]">
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl bg-primary text-white font-semibold text-[15px] shadow-primary transition-all">
            <FiHome className="mr-4 text-xl" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all group">
            <FiShoppingBag className="mr-4 text-xl text-text-primary" />
            <span className="text-text-primary">Orders</span>
            <FiChevronDown className="ml-auto text-text-secondary text-sm" />
          </a>
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all group">
            <FiBox className="mr-4 text-xl text-text-primary" />
            <span className="text-text-primary">Products</span>
            <FiChevronDown className="ml-auto text-text-secondary text-sm" />
          </a>
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
            <FiBarChart2 className="mr-4 text-xl text-text-primary" />
            <span className="text-text-primary">Analytics</span>
          </a>
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all group">
            <FiPieChart className="mr-4 text-xl text-text-primary" />
            <span className="text-text-primary">Marketing</span>
            <FiChevronDown className="ml-auto text-text-secondary text-sm" />
          </a>
          <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
            <FiMessageSquare className="mr-4 text-xl text-text-primary" />
            <span className="text-text-primary">Messages</span>
            <span className="bg-success text-white text-[11px] font-bold px-2 py-0.5 rounded-full ml-auto">25</span>
          </a>
        </nav>
      </div>

      {/* Integrations Section */}
      <div className="mb-8 pl-2">
        <div className="text-[12px] text-text-secondary font-semibold mb-4 capitalize tracking-wide">Integrations</div>
        <nav className="flex flex-col gap-[6px]">
          <a href="#" className="flex items-center px-[18px] py-[12px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
            <div className="w-5 h-5 mr-4 flex relative rounded bg-[#2684ff] items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-text-primary">Jira</span>
          </a>
          <a href="#" className="flex items-center px-[18px] py-[12px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
            <FiSlack className="mr-4 text-xl text-[#e01e5a]" />
            <span className="text-text-primary">Slack</span>
          </a>
          <a href="#" className="flex items-center px-[18px] py-[12px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
            <div className="w-5 h-5 mr-4 flex relative rounded bg-[#1f8ceb] items-center justify-center">
               <div className="w-3 h-2 border-y-2 border-white"></div>
            </div>
            <span className="text-text-primary">Intercom</span>
          </a>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="mt-auto pl-2">
        <a href="#" className="flex items-center px-[18px] py-[14px] rounded-2xl text-text-secondary font-semibold text-[15px] hover:bg-gray-50 hover:text-text-primary transition-all">
          <FiLogOut className="mr-4 text-xl text-text-primary" />
          <span className="text-text-primary">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
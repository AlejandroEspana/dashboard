'use client';

import React from 'react';
import { 
  FiHome, FiShoppingBag, FiBox, FiBarChart2, FiPieChart, FiMessageSquare,
  FiSlack, FiLogOut, FiChevronLeft, FiChevronDown
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-[260px] h-screen fixed left-0 top-0 bg-white flex flex-col px-6 py-8 border-r border-border z-10">
      
      {/* Logo Section */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center text-white bg-[#ffb800] font-outfit font-bold text-lg rounded-[10px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
            R
          </div>
          <span className="font-outfit font-bold text-2xl text-text-primary">flex</span>
        </div>
        <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-text-secondary cursor-pointer hover:bg-gray-50">
          <FiChevronLeft className="text-sm" />
        </button>
      </div>

      {/* Menu Section */}
      <div className="mb-8">
        <div className="text-[13px] text-text-secondary font-medium mb-4 capitalize">Menu</div>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center px-4 py-3 rounded-xl bg-primary text-white font-semibold text-[15px] shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all">
            <FiHome className="mr-4 text-xl text-white" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all group">
            <FiShoppingBag className="mr-4 text-xl text-[#1a1a1a]" />
            <span>Orders</span>
            <FiChevronDown className="ml-auto text-text-secondary text-base group-hover:text-text-primary" />
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all group">
            <FiBox className="mr-4 text-xl text-[#1a1a1a]" />
            <span>Products</span>
            <FiChevronDown className="ml-auto text-text-secondary text-base group-hover:text-text-primary" />
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
            <FiBarChart2 className="mr-4 text-xl text-[#1a1a1a]" />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all group">
            <FiPieChart className="mr-4 text-xl text-[#1a1a1a]" />
            <span>Marketing</span>
            <FiChevronDown className="ml-auto text-text-secondary text-base group-hover:text-text-primary" />
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
            <FiMessageSquare className="mr-4 text-xl text-[#1a1a1a]" />
            <span>Messages</span>
            <span className="bg-success text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-auto">25</span>
          </a>
        </nav>
      </div>

      {/* Integrations Section */}
      <div className="mb-8">
        <div className="text-[13px] text-text-secondary font-medium mb-4 capitalize">Integrations</div>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
            <div className="w-5 h-5 mr-4 flex relative rounded bg-[#2684ff] items-center justify-center">
              {/* Simulated Jira Icon layout */}
            </div>
            <span>Jira</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
            <FiSlack className="mr-4 text-xl text-[#e01e5a]" />
            <span>Slack</span>
          </a>
          <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
            <div className="w-5 h-5 mr-4 flex relative rounded bg-[#1f8ceb]"></div>
            <span>Intercom</span>
          </a>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="mt-auto">
        <a href="#" className="flex items-center px-4 py-3 rounded-xl text-text-primary font-semibold text-[15px] hover:bg-gray-50 transition-all">
          <FiLogOut className="mr-4 text-xl text-[#1a1a1a]" />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
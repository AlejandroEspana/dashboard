'use client';

import React from 'react';
import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex lg:justify-between items-center pb-8 gap-4 lg:gap-0">
      
      {/* Mobile Hamburger menu */}
      <button className="lg:hidden p-2 text-text-primary bg-white rounded-xl shadow-sm border border-border">
        <FiMenu className="text-xl" />
      </button>

      <div className="flex-1 flex items-center">
        <div className="flex items-center bg-white rounded-3xl px-5 py-[10px] w-full lg:w-[420px] shadow-[0_4px_12px_rgba(0,0,0,0.01)] border border-border">
          <FiSearch className="text-text-secondary text-lg mr-3" />
          <input 
            type="text" 
            placeholder="Search" 
            className="border-none outline-none bg-transparent w-full font-inter text-[15px] text-text-primary placeholder:text-[#a0a4b8] placeholder:font-medium"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 ml-auto">
        <button className="bg-white border border-border rounded-full w-11 h-11 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:bg-gray-50 shrink-0">
          <div className="relative flex">
            <FiBell className="text-[#a0a4b8] text-[20px]" />
            <span className="absolute -top-[2px] -right-[2px] bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-[2px] border-white">
              3
            </span>
          </div>
        </button>

        <div className="hidden sm:flex items-center">
          <div className="flex flex-col mr-4 text-right">
            <span className="text-[11px] text-[#a0a4b8] font-semibold mb-0 tracking-wide">Your Balance</span>
            <span className="text-[17px] font-bold text-primary font-outfit">$5,456</span>
          </div>
        </div>

        <div className="hidden sm:block w-px h-[34px] bg-border mx-1"></div>

        <div className="flex items-center gap-3 cursor-pointer group shrink-0">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="User Profile" 
            className="w-11 h-11 rounded-full object-cover group-hover:ring-2 ring-primary/20 transition-all shadow-sm" 
          />
          <span className="hidden sm:inline text-[15px] font-bold text-text-primary">
            <span className="font-medium text-text-primary">Hi,</span> Lay
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
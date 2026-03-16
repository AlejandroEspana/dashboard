'use client';

import React from 'react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center pb-8">
      
      <div className="flex-1 flex items-center">
        <div className="flex items-center bg-white rounded-3xl px-5 py-2.5 w-[400px] shadow-[0_4px_12px_rgba(0,0,0,0.01)] border border-border">
          <FiSearch className="text-text-secondary text-lg mr-3" />
          <input 
            type="text" 
            placeholder="Search" 
            className="border-none outline-none bg-transparent w-full font-inter text-sm text-text-primary placeholder:text-text-secondary"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-white border border-border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:bg-gray-50">
          <div className="relative flex">
            <FiBell className="text-text-primary text-lg" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center border-2 border-white">
              3
            </span>
          </div>
        </button>

        <div className="flex items-center">
          <div className="flex flex-col mr-4 text-right">
            <span className="text-xs text-text-secondary font-medium mb-0.5">Your Balance</span>
            <span className="text-base font-bold text-primary font-outfit">$5,456</span>
          </div>
        </div>

        <div className="w-px h-8 bg-border"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="User Profile" 
            className="w-10 h-10 rounded-full object-cover group-hover:ring-2 ring-primary/20 transition-all" 
          />
          <span className="text-sm font-semibold text-text-primary">
            <span className="font-normal">Hi,</span> Lay
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
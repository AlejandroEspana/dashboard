'use client';

import React from 'react';
import { FiUsers, FiCalendar, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const SessionsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: { grid: { display: false }, border: { display: false }, ticks: { display: false } }, 
      // Hiding standard x-axis to use the custom one matching design
      y: {
        grid: { color: '#f1f2f6' }, border: { display: false },
        ticks: { color: '#8d93a5', font: { family: 'Inter', size: 12 }, stepSize: 5 }
      }
    },
    elements: { line: { tension: 0.4 } }
  };

  const data = {
    labels: [' ', '21', '22', '23', '24', '25', ' '],
    datasets: [{
      fill: true,
      data: [0, 6, 2, 8, 2, 15, 17],
      borderColor: '#4f46e5',
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.1)');
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0)');
        return gradient;
      },
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
    }],
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-card h-full flex flex-col">
      
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg m-0 text-text-primary">Online Store Sessions</h2>
        <button className="bg-white border border-border px-4 py-2 rounded-full text-[13px] font-medium text-text-secondary cursor-pointer hover:bg-gray-50">
          View Report
        </button>
      </div>

      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-[#f3f0ff] flex items-center justify-center mr-5 text-[#7b61ff] text-2xl">
          <FiUsers />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-text-secondary font-semibold mb-1">Visitors</div>
          <div className="font-outfit text-[40px] font-bold text-text-primary leading-none">68</div>
        </div>
        <div className="ml-auto flex flex-col items-end gap-3">
          <div className="flex items-center text-success text-sm font-semibold">
             <FiArrowUp className="mr-1 stroke-[3]" /> 15.6%
          </div>
          <div className="flex items-center gap-6">
             <span className="text-primary font-bold text-base">26</span>
             <span className="flex items-center text-danger text-sm font-semibold">
                <FiArrowDown className="mr-1 stroke-[3]" /> 1.6%
             </span>
          </div>
        </div>
      </div>

      <div className="h-px bg-border -mx-8 mb-6"></div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[15px] text-text-primary m-0">Sessions Over Time</h3>
        <div className="flex items-center border border-border px-4 py-2 rounded-full text-[13px] font-medium text-text-secondary cursor-pointer gap-2 hover:bg-gray-50">
          <FiCalendar className="text-sm" />
          <span>February</span>
          <span className="text-[10px]">&#9662;</span>
        </div>
      </div>

      <div className="h-[250px] w-full relative">
        <Line options={options} data={data} />
      </div>

      <div className="flex justify-between items-center mt-4 px-10">
        <button className="w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer text-text-secondary hover:bg-gray-50">
          &lt;
        </button>
        <div className="flex justify-between flex-1 px-8 relative">
           <div className="absolute -top-3 left-[calc(16.66%*0+1rem)] text-[13px] text-white bg-primary w-9 h-9 rounded-full flex items-center justify-center font-semibold shadow-primary">21</div>
           <div className="text-[13px] text-text-secondary font-medium pl-[0]"></div> {/* Placeholder to align grid */}
           <div className="text-[13px] text-text-secondary font-medium">22</div>
           <div className="text-[13px] text-text-secondary font-medium">23</div>
           <div className="text-[13px] text-text-secondary font-medium">24</div>
           <div className="text-[13px] text-text-secondary font-medium">25</div>
        </div>
        <button className="w-8 h-8 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer text-text-secondary hover:bg-gray-50">
          &gt;
        </button>
      </div>

    </div>
  );
};

export default SessionsChart;
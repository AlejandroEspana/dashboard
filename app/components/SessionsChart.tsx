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
      borderColor: '#5247ed',
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(82, 71, 237, 0.15)');
        gradient.addColorStop(1, 'rgba(82, 71, 237, 0)');
        return gradient;
      },
      borderWidth: 3,
      pointRadius: 0,
      pointHoverRadius: 0,
    }],
  };

  return (
    <div className="bg-white rounded-[28px] p-6 sm:p-8 xl:p-[36px] shadow-card flex flex-col h-full border border-white/50 w-full min-w-0">
      
      <div className="flex justify-between items-center mb-6 xl:mb-8">
        <h2 className="text-[17px] font-bold tracking-tight m-0 text-text-primary">Online Store Sessions</h2>
        <button className="bg-white border border-[#e6e8f0] px-[18px] py-[8px] rounded-full text-[13px] font-semibold text-text-secondary cursor-pointer hover:bg-gray-50 hover:text-text-primary transition-colors">
          View Report
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center mb-6 xl:mb-8 gap-4 sm:gap-0">
        <div className="w-[62px] h-[62px] min-w-[62px] rounded-full bg-[#f3f0ff] flex items-center justify-center sm:mr-6 text-[#7b61ff] text-[26px]">
          <FiUsers />
        </div>
        <div className="flex flex-col">
          <div className="text-[13px] text-text-secondary font-semibold mb-1 tracking-wide">Visitors</div>
          <div className="font-outfit text-[46px] font-bold text-text-primary leading-none tracking-tight">68</div>
        </div>
        <div className="sm:ml-auto flex flex-col items-start sm:items-end gap-2 xl:gap-3">
          <div className="flex items-center text-success text-[14px] font-bold">
             <FiArrowUp className="mr-1 stroke-[4] text-[13px]" /> 15.6%
          </div>
          <div className="flex items-center gap-[22px]">
             <span className="text-primary font-bold text-[17px]">26</span>
             <span className="flex items-center text-danger text-[14px] font-bold">
                <FiArrowDown className="mr-1 stroke-[4] text-[13px]" /> 1.6%
             </span>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#f1f2f6] -mx-6 sm:-mx-8 xl:-mx-[36px] mb-6 xl:mb-8"></div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4 sm:gap-0">
        <h3 className="text-[15px] font-bold text-text-primary m-0 tracking-tight">Sessions Over Time</h3>
        <div className="flex items-center border border-[#e6e8f0] px-4 py-2 rounded-full text-[13px] font-semibold text-text-secondary cursor-pointer gap-2 hover:bg-gray-50 self-start sm:self-auto transition-colors">
          <FiCalendar className="text-[14px] text-text-primary" />
          <span>February</span>
          <span className="text-[9px] ml-1">&#9662;</span>
        </div>
      </div>

      <div className="h-[200px] sm:h-[250px] xl:h-[280px] w-full relative min-w-0">
        <Line options={options} data={data} />
      </div>

      <div className="hidden sm:flex justify-between items-center mt-6 xl:mt-8 px-2 xl:px-8">
        <button className="w-[34px] h-[34px] rounded-full border border-border bg-white flex items-center justify-center cursor-pointer text-[#a0a4b8] hover:border-gray-300 transition-colors">
          &lt;
        </button>
        <div className="flex justify-between flex-1 px-4 lg:px-8 relative">
           <div className="absolute -top-3 left-[calc(16.66%*0+1.2rem)] lg:left-[calc(16.66%*0+2rem)] text-[14px] text-white bg-primary w-[38px] h-[38px] rounded-full flex items-center justify-center font-bold shadow-primary">21</div>
           <div className="text-[14px] text-text-secondary font-medium pl-[0]"></div> {/* Placeholder */}
           <div className="text-[14px] text-text-secondary font-medium">22</div>
           <div className="text-[14px] text-text-secondary font-medium">23</div>
           <div className="text-[14px] text-text-secondary font-medium">24</div>
           <div className="text-[14px] text-text-secondary font-medium">25</div>
        </div>
        <button className="w-[34px] h-[34px] rounded-full border border-border bg-white flex items-center justify-center cursor-pointer text-[#a0a4b8] hover:border-gray-300 transition-colors">
          &gt;
        </button>
      </div>

    </div>
  );
};

export default SessionsChart;
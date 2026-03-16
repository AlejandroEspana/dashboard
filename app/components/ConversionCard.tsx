'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { FiArrowUp } from 'react-icons/fi';

ChartJS.register(ArcElement, Tooltip);

const ConversionCard = () => {
    
  const data = {
    labels: ['Conversion', 'Remaining'],
    datasets: [{
      data: [58.19, 41.81],
      backgroundColor: ['#5247ed', '#eef2ff'],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
      cutout: '75%',
      borderRadius: [25, 0]
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { tooltip: { enabled: false } },
  };

  return (
    <div className="bg-white rounded-[28px] p-6 sm:p-8 shadow-card flex flex-col h-full border border-white/50">
      <h3 className="text-[17px] font-bold tracking-tight m-0 mb-6 text-text-primary">Conversion</h3>
      
      <div className="relative h-[160px] xl:h-[180px] flex justify-center items-end">
        <Doughnut data={data} options={options} />
        <div className="absolute bottom-[10px] xl:bottom-[15px] flex flex-col items-center">
          <div className="font-outfit text-[38px] font-bold text-text-primary leading-none tracking-tight">58,19%</div>
          <div className="flex items-center text-success text-[14px] font-bold mt-[6px]">
             <FiArrowUp className="mr-1 stroke-[4] text-[13px]" /> 3.5%
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-auto pt-8 gap-4 sm:gap-0">
        <div className="flex items-center gap-[6px]">
          <span className="text-[12px] font-bold text-success scale-[1.2] translate-y-[1px] mr-1">&#10003;</span>
          <span className="text-text-secondary text-[13px] font-semibold tracking-wide mr-1">Income</span>
          <span className="text-text-primary font-bold text-[15px]">$542,317</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <span className="text-[12px] font-bold text-text-primary scale-[1.2] mr-1">&#8599;</span>
          <span className="text-text-secondary text-[13px] font-semibold tracking-wide mr-1">Expenses</span>
          <span className="text-text-primary font-bold text-[15px]">$497,456</span>
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
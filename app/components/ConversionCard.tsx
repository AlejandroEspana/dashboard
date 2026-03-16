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
      backgroundColor: ['#4f46e5', '#eef2ff'],
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
      cutout: '80%',
      borderRadius: [20, 0]
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { tooltip: { enabled: false } },
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-card flex flex-col h-full">
      <h3 className="text-lg m-0 mb-6 text-text-primary">Conversion</h3>
      
      <div className="relative h-[150px] flex justify-center items-end">
        <Doughnut data={data} options={options} />
        <div className="absolute bottom-2 flex flex-col items-center">
          <div className="font-outfit text-[32px] font-bold text-text-primary leading-none">58,19%</div>
          <div className="flex items-center text-success text-[13px] font-semibold mt-1">
             <FiArrowUp className="mr-1 stroke-[3] text-sm" /> 3.5%
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-auto pt-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-success">&#10003;</span>
          <span className="text-text-secondary text-[13px] font-medium">Income</span>
          <span className="text-text-primary font-bold text-sm">$542,317</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-text-primary">&#8599;</span>
          <span className="text-text-secondary text-[13px] font-medium">Expenses</span>
          <span className="text-text-primary font-bold text-sm">$497,456</span>
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
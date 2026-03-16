'use client';

import React from 'react';
import styles from './ConversionCard.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

ChartJS.register(ArcElement, Tooltip);

const ConversionCard = () => {
    
  const data = {
    labels: ['Conversion', 'Remaining'],
    datasets: [
      {
        data: [58.19, 41.81],
        backgroundColor: ['#4f46e5', '#eef2ff'],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
        borderRadius: [20, 0]
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Conversion</h3>
      
      <div className={styles.chartWrapper}>
        <Doughnut data={data} options={options} />
        <div className={styles.chartCenterText}>
          <div className={styles.percentageText}>58,19%</div>
          <div className={styles.trendText}>
             <FiArrowUp className={styles.arrowIcon} /> 3.5%
          </div>
        </div>
      </div>

      <div className={styles.statsFooter}>
        <div className={styles.statItem}>
          <span className={styles.incomeDot}>&#10003;</span>
          <span className={styles.statLabel}>Income</span>
          <span className={styles.statValue}>$542,317</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.expenseDot}>&#8599;</span>
          <span className={styles.statLabel}>Expenses</span>
          <span className={styles.statValue}>$497,456</span>
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
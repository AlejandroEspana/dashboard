'use client';

import React from 'react';
import styles from './SessionsChart.module.css';
import { FiUsers, FiCalendar, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const SessionsChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { color: '#8d93a5', font: { family: 'Inter', size: 12 } }
      },
      y: {
        grid: { color: '#f1f2f6' },
        border: { display: false },
        ticks: { color: '#8d93a5', font: { family: 'Inter', size: 12 }, stepSize: 5 }
      }
    },
    elements: {
      line: { tension: 0.4 } // curvy line
    }
  };

  const data = {
    labels: [' ', '21', '22', '23', '24', '25', ' '],
    datasets: [
      {
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
      },
    ],
  };

  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <h2 className={styles.cardTitle}>Online Store Sessions</h2>
        <button className={styles.viewReportBtn}>View Report</button>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statsIconWrapper}>
          <FiUsers className={styles.statsIcon} />
        </div>
        <div className={styles.statsInfo}>
          <div className={styles.statsLabel}>Visitors</div>
          <div className={styles.statsValue}>68</div>
        </div>
        <div className={styles.statsChanges}>
          <div className={styles.changePositive}>
             <FiArrowUp className={styles.arrowIcon} /> 15.6%
          </div>
          <div className={styles.changeCompare}>
             <span className={styles.compareValue}>26</span>
             <span className={styles.changeNegative}>
                <FiArrowDown className={styles.arrowIcon} /> 1.6%
             </span>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.chartControls}>
        <h3 className={styles.chartSubtitle}>Sessions Over Time</h3>
        <div className={styles.datePicker}>
          <FiCalendar className={styles.actionIcon} />
          <span>February</span>
          <span className={styles.dropdownArrow}>&#9662;</span>
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <Line options={options} data={data} />
      </div>

      <div className={styles.xAxesCustomControls}>
        {/* Simulating the rounded active state for day '21' */}
        <button className={styles.navBtn}>&lt;</button>
        <div className={styles.daysList}>
           <div className={styles.dayActive}>21</div>
           <div className={styles.day}>22</div>
           <div className={styles.day}>23</div>
           <div className={styles.day}>24</div>
           <div className={styles.day}>25</div>
        </div>
        <button className={styles.navBtn}>&gt;</button>
      </div>

    </div>
  );
};

export default SessionsChart;
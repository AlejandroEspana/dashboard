'use client';

import React from 'react';
import styles from './DashboardGrid.module.css';
import { FiHome, FiCalendar, FiDownloadCloud } from 'react-icons/fi';
import KPICards from './KPICards';
import SessionsChart from './SessionsChart';
import PromoCard from './PromoCard';
import ConversionCard from './ConversionCard';

const DashboardGrid = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.pageTitleWrapper}>
          <div className={styles.titleIconBox}>
            <FiHome className={styles.titleIcon} />
          </div>
          <h1 className={styles.pageTitle}>Dashboard</h1>
        </div>
        
        <div className={styles.headerActions}>
          <div className={styles.datePicker}>
            <FiCalendar className={styles.actionIcon} />
            <span>This Month</span>
            <span className={styles.dropdownArrow}>&#9662;</span>
          </div>
          <button className={styles.downloadBtn}>
            <FiDownloadCloud className={styles.actionIcon} />
            Download Report
          </button>
        </div>
      </div>

      <div className={styles.mainGridWrapper}>
        <KPICards />
        <div className={styles.contentGrid}>
          <div className={styles.chartCol}>
            <SessionsChart />
          </div>
          <div className={styles.sideCol}>
            <PromoCard />
            <ConversionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;

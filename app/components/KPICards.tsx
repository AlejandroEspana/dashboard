'use client';

import React from 'react';
import styles from './KPICards.module.css';
import { FiShoppingCart, FiUsers, FiShoppingBag, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const KPICards = () => {
  return (
    <div className={styles.kpiContainer}>
      
      {/* Total Sales Card */}
      <div className={styles.kpiCard}>
        <div className={`${styles.iconWrapper} ${styles.blueIconBg}`}>
          <FiShoppingCart className={`${styles.icon} ${styles.blueIcon}`} />
        </div>
        <div className={styles.kpiInfo}>
          <div className={styles.kpiLabel}>Total Sales</div>
          <div className={styles.kpiValueWrapper}>
            <span className={styles.kpiValue}>263k</span>
            <span className={styles.changePositive}>
              <FiArrowUp className={styles.arrowIcon} /> 15.6%
            </span>
          </div>
        </div>
      </div>

      {/* Total Visitors Card */}
      <div className={styles.kpiCard}>
        <div className={`${styles.iconWrapper} ${styles.purpleIconBg}`}>
          <FiUsers className={`${styles.icon} ${styles.purpleIcon}`} />
        </div>
        <div className={styles.kpiInfo}>
          <div className={styles.kpiLabel}>Total Visitors</div>
          <div className={styles.kpiValueWrapper}>
            <span className={styles.kpiValue}>35k</span>
            <span className={styles.changeNegative}>
              <FiArrowDown className={styles.arrowIcon} /> 6.2%
            </span>
          </div>
        </div>
      </div>

      {/* Total Orders Card */}
      <div className={styles.kpiCard}>
        <div className={`${styles.iconWrapper} ${styles.blueIconBg}`}>
          <FiShoppingBag className={`${styles.icon} ${styles.blueIcon}`} />
        </div>
        <div className={styles.kpiInfo}>
          <div className={styles.kpiLabel}>Total Orders</div>
          <div className={styles.kpiValueWrapper}>
            <span className={styles.kpiValue}>165k</span>
            <span className={styles.changePositive}>
              <FiArrowUp className={styles.arrowIcon} /> 3.5%
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default KPICards;

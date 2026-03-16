'use client';

import React from 'react';
import styles from './Header.module.css';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {/* Placeholder for page title if we were passing it, but design has Dashboard icon + text on the grid level, not in top header. Wait, in design, top header is just search, bell, balance, profile. */}
        <div className={styles.searchContainer}>
          <FiSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search" 
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.iconButton}>
          <div className={styles.bellWrapper}>
            <FiBell className={styles.bellIcon} />
            <span className={styles.notificationDot}>3</span>
          </div>
        </button>

        <div className={styles.balanceSection}>
          <div className={styles.balanceLabels}>
            <span className={styles.balanceTitle}>Your Balance</span>
            <span className={styles.balanceAmount}>$5,456</span>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.profileSection}>
          <img 
            src="https://i.pravatar.cc/150?img=11" 
            alt="User Profile" 
            className={styles.avatar} 
          />
          <span className={styles.profileText}>
            <span className={styles.hiText}>Hi,</span> Lay
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
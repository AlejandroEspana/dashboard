'use client';

import React from 'react';
import styles from './Sidebar.module.css';
import { 
  FiHome, FiShoppingBag, FiBox, FiBarChart2, FiPieChart, FiMessageSquare,
  FiTrello, FiSlack, FiTwitter, FiLogOut, FiChevronLeft, FiChevronDown
} from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoIcon}>R</div>
          <span className={styles.logoText}>flex</span>
        </div>
        <button className={styles.collapseBtn}>
          <FiChevronLeft className={styles.collapseIcon} />
        </button>
      </div>

      <div className={styles.menuSection}>
        <div className={styles.menuLabel}>Menu</div>
        <nav className={styles.navLinks}>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            <FiHome className={styles.navIcon} />
            <span className={styles.navText}>Dashboard</span>
          </a>
          <a href="#" className={styles.navLink}>
            <FiShoppingBag className={styles.navIcon} />
            <span className={styles.navText}>Orders</span>
            <FiChevronDown className={styles.chevronIcon} />
          </a>
          <a href="#" className={styles.navLink}>
            <FiBox className={styles.navIcon} />
            <span className={styles.navText}>Products</span>
            <FiChevronDown className={styles.chevronIcon} />
          </a>
          <a href="#" className={styles.navLink}>
            <FiBarChart2 className={styles.navIcon} />
            <span className={styles.navText}>Analytics</span>
          </a>
          <a href="#" className={styles.navLink}>
            <FiPieChart className={styles.navIcon} />
            <span className={styles.navText}>Marketing</span>
            <FiChevronDown className={styles.chevronIcon} />
          </a>
          <a href="#" className={styles.navLink}>
            <FiMessageSquare className={styles.navIcon} />
            <span className={styles.navText}>Messages</span>
            <span className={styles.badge}>25</span>
          </a>
        </nav>
      </div>

      <div className={styles.integrationsSection}>
        <div className={styles.menuLabel}>Integrations</div>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.integrationLink}>
            <div className={`${styles.integrationIconWrapper} ${styles.jiraIcon}`}>
               <div className={styles.diamondLeft}></div>
               <div className={styles.diamondRight}></div>
               <div className={styles.diamondTop}></div>
            </div>
            <span className={styles.navText}>Jira</span>
          </a>
          <a href="#" className={styles.integrationLink}>
            <FiSlack className={`${styles.navIcon} ${styles.slackColor}`} />
            <span className={styles.navText}>Slack</span>
          </a>
          <a href="#" className={styles.integrationLink}>
            <div className={styles.intercomIcon}>
               <div className={styles.intercomBars}></div>
               <div className={styles.intercomFace}></div>
            </div>
            <span className={styles.navText}>Intercom</span>
          </a>
        </nav>
      </div>

      <div className={styles.logoutSection}>
        <a href="#" className={styles.navLink}>
          <FiLogOut className={styles.navIcon} />
          <span className={styles.navText}>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
'use client';

import React from 'react';
import styles from './PromoCard.module.css';
import { FiArrowUp, FiArrowRight } from 'react-icons/fi';

const PromoCard = () => {
  return (
    <div className={styles.promoCard}>
      <div className={styles.content}>
        <h3 className={styles.title}>Need More Stats?</h3>
        <p className={styles.subtitle}>Upgrade to pro for added benefits.</p>
        <button className={styles.upgradeBtn}>
          <FiArrowUp className={styles.btnIcon} /> Go Pro Now
        </button>
      </div>
      
      {/* Decorative illustration based closely on the provided image */}
      <div className={styles.illustration}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
        
        {/* Curvy winding road/arrow pointing up */}
        <div className={styles.roadPath}></div>
        <div className={styles.arrowHeadMain}></div>
        
        <div className={styles.smallArrow1}></div>
        <div className={styles.smallArrow2}></div>

        <div className={styles.personContainer}>
          {/* Abstract representation of the person holding the flag/arrow */}
          <div className={styles.personBody}></div>
          <div className={styles.personHead}></div>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
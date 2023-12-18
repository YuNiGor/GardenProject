import React from 'react';
import { Link } from 'react-router-dom';
import saleImage from '../../assets/sale_new_season.png';
import styles from './SaleNewSeason.module.css';

const SaleNewSeason = () => {
  return (
    <section className={styles.saleSection}>
      <div className={styles.saleContent}>
        <h1>Sale</h1>
        <h2>New season</h2>
        <Link to="/categories/5">
          <button className={styles.saleButton}>Sale</button>
        </Link>
      </div>
      <div className={styles.saleImage}>
        <img src={saleImage} alt="New season sale" />
      </div>
    </section>
  );
};

export default SaleNewSeason;

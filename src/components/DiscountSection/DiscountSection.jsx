import React, { useState } from 'react';
import gnomeImage from '../../assets/gnome.png';
import styles from './DiscountSection.module.css';

function DiscountSection() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleDiscountClick = () => {
    localStorage.setItem('phoneNumber', phoneNumber);
    alert('Discount applied!');
  };

  return (
    <div className={styles.discountSection}>
        <div className={styles.gnome}>
            <img src={gnomeImage} alt="Gnome" className={styles.gnomeImage} />
        </div>
        <div className={styles.discountInfo}>
            <h1 className={styles.discountTitle}>5% off</h1>
            <p className={styles.orderInfo}>on the first order</p>
            <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+49"
            className={styles.phoneInput}
            />
            <button onClick={handleDiscountClick} className={styles.discountButton}>
            Get a discount
            </button>
        </div>
    </div>
  );
}

export default DiscountSection;

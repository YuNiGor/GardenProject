import React, { useState } from 'react';
import gnomeImage from '../../assets/gnome.png';
import styles from './DiscountSection.module.css';

function DiscountSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const isValidPhoneNumber = (number) => {
    const pattern = /^\+[1-9]\d{1,14}$/;
    return pattern.test(number);
  };

  const handleDiscountClick = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('discountApplied', 'true');
      alert('Discount applied!');
      setError('');
    } else {
      setError('Please enter a valid phone number.');
    }
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
        {error && <p className={styles.error}>{error}</p>}
        <button onClick={handleDiscountClick} className={styles.discountButton}>
          Get a discount
        </button>
      </div>
    </div>
  );
}

export default DiscountSection;

import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './OrderDetails.module.css';

const OrderDetails = () => {
  const { cartItems } = useCart();
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const discountApplied = localStorage.getItem('discountApplied') === 'true';
    setIsDiscountApplied(discountApplied);
  }, []);

  const total = cartItems.reduce((acc, item) => {
    const price = item.discont_price || item.price;
    return acc + price * (item.quantity || 1);
  }, 0);

  const discount = isDiscountApplied ? total * 0.05 : 0;
  const finalTotal = total - discount;

  const handleOrderClick = () => {
    const savedPhone = localStorage.getItem('phoneNumber');
    if (!phoneNumber || phoneNumber !== savedPhone) {
      setError('Please enter the phone number used for the discount.');
      return;
    }
    setError('');
    alert('Order placed successfully!');
  };

  return (
    <div className={styles.orderDetails}>
      <h2>Order Details</h2>
      <div className={styles.total}>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      {isDiscountApplied && (
        <div className={styles.discountMessage}>
          <span>Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
      <div className={styles.finalTotal}>
        <span>Final Total</span>
        <span>${finalTotal.toFixed(2)}</span>
      </div>
      <input 
        type="text" 
        placeholder="Phone number" 
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className={styles.phoneInput}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={handleOrderClick} className={styles.orderButton}>
        Order
      </button>
    </div>
  );
};

export default OrderDetails;

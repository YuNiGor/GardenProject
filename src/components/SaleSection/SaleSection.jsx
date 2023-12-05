import React, { useState, useEffect } from 'react';
import styles from './SaleSection.module.css';

function getRandomItems(arr, num) {
  const result = new Set();
  while(result.size < num) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    result.add(arr[randomIndex]);
  }
  return [...result];
}

function SaleSection() {
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    const fetchSaleItems = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/all`);
        const data = await response.json();
        const discountedProducts = data.filter(item => item.discont_price && item.price && item.discont_price < item.price);
        const randomDiscountedProducts = getRandomItems(discountedProducts, 3);
        setSaleItems(randomDiscountedProducts);
      } catch (error) {
        console.error('Error fetching sale items:', error);
      }
    };

    fetchSaleItems();
  }, []);

  return (
    <div className={styles.saleSection}>
      <h2 className={styles.title}>Sale</h2>
      <div className={styles.itemsContainer}>
        {saleItems.map(item => (
          <div key={item.id} className={styles.item}>
            <img src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.title} className={styles.image} />
            <div className={styles.info}>
              <span className={styles.newPrice}>${item.discont_price}</span>
              <span className={styles.oldPrice}>${item.price}</span>
              <span className={styles.discount}>{((1 - item.discont_price / item.price) * 100).toFixed(0)}% off</span>
            </div>
            <p className={styles.description}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaleSection;

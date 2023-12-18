import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
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
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default SaleSection;

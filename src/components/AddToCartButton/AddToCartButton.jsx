import React from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <button className={styles.addToCartButton} onClick={handleAddToCartClick}>
      Add to cart
    </button>
  );
};

export default AddToCartButton;

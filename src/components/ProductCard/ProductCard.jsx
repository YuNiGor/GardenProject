import React from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.title} />
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className={styles.priceSection}>
          {product.discont_price && (
            <span className={styles.discountPrice}>${product.discont_price}</span>
          )}
          <span className={styles.originalPrice}>${product.price}</span>
        </div>
        <button className={styles.addToCartButton}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <img src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>
          {product.discont_price ? (
            <>
              <span className={styles.discountedPrice}>${product.discont_price}</span>
              <span className={styles.originalPrice}>${product.price}</span>
            </>
          ) : (
            <span>${product.price}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

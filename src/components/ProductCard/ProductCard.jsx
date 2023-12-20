import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div 
      className={styles.productCard} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <img src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.title} className={styles.productImage} />
      {isHovered && (
        <AddToCartButton product={product} />
      )}
      <div className={styles.productInfo}>
        <p className={styles.productPrice}>
        <h3 className={styles.productTitle}>{product.title}</h3>
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

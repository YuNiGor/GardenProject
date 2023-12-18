import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './SingleProduct.module.css';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.error("There was a problem fetching the product data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  
    fetchProduct();
  }, [id]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.singleProductContainer}>
      <div className={styles.productDetails}>
        <img src={process.env.REACT_APP_API_URL + product.image} alt={product.title} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productDescription}>{product.description}</p>
          <div className={styles.priceSection}>
            {product.discont_price ? (
              <>
                <span className={styles.discountedPrice}>${product.discont_price}</span>
                <span className={styles.originalPrice}>${product.price}</span>
              </>
            ) : (
              <span className={styles.price}>${product.price}</span>
            )}
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

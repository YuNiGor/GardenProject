import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './SingleProduct.module.css';

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`);
        if (!response.ok) {
          throw new Error('Could not fetch the product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      }
    };

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
      <h1 className={styles.productTitle}>{product.title}</h1>
      <div className={styles.productContent}>
        <div className={styles.productImageContainer}>
          <img
            src={`${process.env.REACT_APP_API_URL}${product.image}`}
            alt={product.title}
            className={styles.productImage}
          />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.priceSection}>
            {product.discont_price ? (
              <>
                <span className={styles.discountedPrice}>${product.discont_price}</span>
                <span className={styles.originalPrice}>${product.price}</span>
              </>
            ) : (
              <span className={styles.price}>${product.price}</span>
            )}
            <span className={styles.discount}>{product.discont_price ? '-7%' : ''}</span>
          </div>
          <button className={styles.addToCartButton}>To cart</button>
          <div className={styles.productDescription}>{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
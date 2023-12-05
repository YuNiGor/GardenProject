import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductCategory.module.css';
import ProductCard from '../ProductCard/ProductCard'; 

function ProductCategory() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]);

  return (
    <div className={styles.categoryPage}>
      <h1>Products</h1>
      <div className={styles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;

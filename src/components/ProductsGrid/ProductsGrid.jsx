import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsGrid.module.css';

function ProductsGrid({ initialProducts, filters }) {
  const applyFilters = (products) => {
    return products
      .filter(product => {
        const matchPriceRange = 
          (!filters.minPrice || product.price >= filters.minPrice) &&
          (!filters.maxPrice || product.price <= filters.maxPrice);
        const matchDiscounted = 
          !filters.discounted || 
          (product.discont_price && product.discont_price < product.price);

        return matchPriceRange && matchDiscounted;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          default:
            return 0;
        }
      });
  };

  const filteredProducts = applyFilters(initialProducts);

  return (
    <div className={styles.productsGrid}>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;

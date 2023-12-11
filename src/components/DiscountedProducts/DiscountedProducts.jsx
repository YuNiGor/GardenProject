import React, { useState, useEffect } from 'react';
import FilterForm from '../FilterForm/FilterForm';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import styles from './DiscountedProducts.module.css';

function DiscountedProducts() {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    sortBy: 'default',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiscountedProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/all`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const discounted = data.filter(product => product.discont_price && product.discont_price < product.price);
        setDiscountedProducts(discounted);
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoading(false);
    };

    fetchDiscountedProducts();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.discountedProductsContainer}>
      <h1>Discounted Products</h1>
      <FilterForm 
        filters={filters} 
        onFilterChange={handleFilterChange}
        hideDiscountFilter={true}
      />
      <ProductsGrid initialProducts={discountedProducts} filters={filters} />
    </div>
  );
}

export default DiscountedProducts;

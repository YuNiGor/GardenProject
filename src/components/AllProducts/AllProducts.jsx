import React, { useState, useEffect } from 'react';
import FilterForm from '../FilterForm/FilterForm';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import styles from './AllProducts.module.css';

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    discounted: false,
    sortBy: 'default',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/products/all`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoading(false);
    };

    fetchAllProducts();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.allProductsContainer}>
      <h1>All Products</h1>
      <FilterForm filters={filters} onFilterChange={handleFilterChange} />
      <ProductsGrid initialProducts={allProducts} filters={filters} />
    </div>
  );
}

export default AllProducts;

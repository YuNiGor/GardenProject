import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FilterForm from '../FilterForm/FilterForm';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import styles from './ProductCategory.module.css';

function ProductCategory() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    discounted: false,
    sortBy: 'default',
  });

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategory(data.category);
        setAllProducts(data.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setIsLoading(false);
    };

    fetchCategoryData();
  }, [categoryId]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (!category) return <div>Category not found</div>;

  return (
    <div className={styles.categoryContainer}>
      <h1>{category.title}</h1>
      <FilterForm filters={filters} onFilterChange={handleFilterChange} />
      <ProductsGrid initialProducts={allProducts} filters={filters} />
    </div>
  );
}

export default ProductCategory;

import React from 'react';
import styles from './FilterForm.module.css';

function FilterForm({ filters, onFilterChange, hideDiscountFilter = false }) {
  const handlePriceChange = (e) => {
    const value = e.target.value;
    onFilterChange({ ...filters, [e.target.name]: value !== '' ? value : '' });
  };
  

  const handleDiscountChange = (e) => {
    onFilterChange({ ...filters, discounted: e.target.checked });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sortBy: e.target.value });
  };

  return (
    <form className={styles.filterForm}>
      <div className={styles.priceFilter}>
        <label>
          Price from:
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handlePriceChange}
            placeholder="Min"
          />
        </label>
        <label>
          to:
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            placeholder="Max"
          />
        </label>
      </div>

            {!hideDiscountFilter && (
        <label className={styles.discountFilter}>
          Discounted items:
          <input
            type="checkbox"
            checked={filters.discounted}
            onChange={handleDiscountChange}
          />
        </label>
      )}

      <label className={styles.sortFilter}>
        Sorted by:
        <select value={filters.sortBy} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="price_asc">Price (lowest first)</option>
          <option value="price_desc">Price (highest first)</option>
        </select>
      </label>
    </form>
  );
}

export default FilterForm;

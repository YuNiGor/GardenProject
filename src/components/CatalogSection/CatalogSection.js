import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CatalogSection.css'

function CatalogSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categories/all`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.log('Error fetching categories:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <section className="catalog-section">
      <h2>Catalog</h2>
      <button className="all-categories-button">All categories</button>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={`${process.env.REACT_APP_API_URL}${category.image}`} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CatalogSection;

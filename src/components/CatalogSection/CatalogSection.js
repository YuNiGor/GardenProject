import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CatalogSection.css';

function CatalogSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categories/all`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <h2>Catalog</h2>
        <Link to="/categories">
          <button className="all-categories-btn">All categories</button>
        </Link>
      </div>
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

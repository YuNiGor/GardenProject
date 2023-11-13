import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CatalogSection.module.css";
import { settings } from "../../utils/settings";

const fetchAllCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/all`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

function CatalogSection() {
  const [categories, setCategories] = useState([]);
  const [isSwiping, setIsSwiping] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllCategories().then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (e, categoryId) => {
    if (isSwiping) {
      e.preventDefault();
    } else {
      navigate(`/categories/${categoryId}`);
    }
  };

  const updatedSettings = {
    ...settings,
    beforeChange: () => setIsSwiping(true),
    afterChange: () => setIsSwiping(false)
  };

  return (
    <section className={styles.catalogSection}>
      <div className={styles.catalogHeader}>
        <h2>Catalog</h2>
        <Link to="/categories">
          <button className={styles.allCategoriesBtn}>All categories</button>
        </Link>
      </div>
      <div className={styles.categoryCardsContainer}>
        <Slider {...updatedSettings}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard} onClick={(e) => handleCategoryClick(e, category.id)}>
              <img
                src={`${process.env.REACT_APP_API_URL}${category.image}`}
                alt={category.title}
              />
              <h3>{category.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CatalogSection;

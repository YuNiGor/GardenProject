import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import saleImage from '../../assets/sale_new_season.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CatalogSection from '../../components/CatalogSection/CatalogSection';


function Main() {
  return (
    <main className="main-container">
      <section className="sale-section">
        <div className="sale-content">
          <h1>Sale</h1>
          <h2>New season</h2>
          <Link to="/all-products">
            <button className="sale-button">Sale</button>
          </Link>
        </div>
        <div className="sale-image">
          <img src={saleImage} alt="New season sale" />
        </div>
      </section>

      <CatalogSection />

      <section className="discount-section">

        <h2>5% off on the first order</h2>
        <button>Get a discount</button>
      </section>

      <section className="featured-products-section">

        <h2>Sale</h2>

      </section>
    </main>
  );
}

export default Main;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Main.css';
import saleImage from '../../assets/sale_new_season.png';
import CatalogSection from '../../components/CatalogSection/CatalogSection';

function Main({ catalogRef }) {
  const location = useLocation();

  useEffect(() => {
    // Проверяем состояние маршрутизации, чтобы определить, нужно ли прокручивать до каталога
    if (location.state?.scrollToCatalog && catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, catalogRef]);

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

      <div ref={catalogRef}>
        <CatalogSection />
      </div>

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

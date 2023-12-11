import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Main.css';
import saleImage from '../../assets/sale_new_season.png';
import CatalogSection from '../CatalogSection/CatalogSection';
import DiscountSection from '../DiscountSection/DiscountSection';
import SaleSection from '../SaleSection/SaleSection'

function Main({ catalogRef }) {
  const location = useLocation();

  useEffect(() => {
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

      <div>
        <DiscountSection />
      </div>

      <div>
        <SaleSection />
      </div>
    </main>
  );
}

export default Main;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SaleNewSeason from '../SaleNewSeason/SaleNewSeason';
import CatalogSection from '../CatalogSection/CatalogSection';
import DiscountSection from '../DiscountSection/DiscountSection';
import SaleSection from '../SaleSection/SaleSection'
import './Main.module.css';

function Main({ catalogRef }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToCatalog && catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location, catalogRef]);

  return (
    <main className="main-container">

      <div>
      <SaleNewSeason />
      </div>
      
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

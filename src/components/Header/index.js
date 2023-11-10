import React from 'react';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import './style.css';

function Header({ catalogRef }) {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    // Если мы уже на главной странице, просто прокручиваем до каталога
    if (window.location.pathname === '/') {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Иначе, переходим на главную страницу и прокручиваем до каталога
      navigate('/', { state: { scrollToCatalog: true } });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-and-catalog">
          <img src={logo} alt="Garden Project Logo" className="header-logo" />
          <button className="catalog-button" onClick={handleCatalogClick}>Catalog</button>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Main Page</Link>
          <Link to="/all-products" className="nav-link">All products</Link>
          <Link to="/discounted-products" className="nav-link">All sales</Link>
          <Link to="/cart" className="nav-link">
            <i className="shopping-cart-icon"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;


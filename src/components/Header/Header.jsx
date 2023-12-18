import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cart.svg';
import styles from './Header.module.css';

function Header({ catalogRef }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCatalogClick = () => {
    if (window.location.pathname === '/') {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToCatalog: true } });
    }
  };

  const itemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoAndCatalog}>
          <img src={logo} alt="Logo" className={styles.logo} onClick={handleLogoClick} />
          <button className={styles.catalogButton} onClick={handleCatalogClick}>
            Catalog
          </button>
        </div>
        <nav className={styles.headerNav}>
          <Link to="/" className={styles.navLink}>Main Page</Link>
          <Link to="/all-products" className={styles.navLink}>All products</Link>
          <Link to="/discounted-products" className={styles.navLink}>All sales</Link>
          <Link to="/cart" className={styles.navLink}>
            <img src={cartIcon} alt="Cart" className={styles.shoppingCartIcon} />
            {itemCount > 0 && (
              <span className={styles.itemCount}>{itemCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

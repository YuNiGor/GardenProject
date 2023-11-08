import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './style.css';


function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-and-catalog">
                    <img src={logo} alt="Garden Project Logo" className="header-logo" />
                    <button className="catalog-button">Catalog</button>
                </div>

                <nav className="header-nav">
                    <Link to="/" className="nav-link">Main Page</Link>
                    <Link to="/AllProducts" className="nav-link">All products</Link>
                    <Link to="/DiscountedProducts" className="nav-link">All sales</Link>
                    <Link to="/Cart" className="nav-link">
                        <i className="shopping-cart-icon"></i>
                    </Link>
                </nav>
            </div>

        </header>
    );
}

export default Header;

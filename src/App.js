import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts/AllProducts';
import ProductCard from './components/ProductCard/ProductCard';
import Categories from './components/Categories/Categories';
import DiscountedProducts from './components/DiscountedProducts/DiscountedProducts';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import ProductCategory from './components/ProductCategory/ProductCategory';
import SingleProduct from './components/SingleProduct/SingleProduct';
import './App.css';

function App() {
  const catalogRef = useRef(null);

  return (
    <div className="global-container">
      <Router>
        <Header catalogRef={catalogRef} />
        <Routes>
          <Route path="/" element={<Main catalogRef={catalogRef} />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/discounted-products" element={<DiscountedProducts />} />
          <Route path="/categories/:categoryId" element={<ProductCategory />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



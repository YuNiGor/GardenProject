import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer/index.js';
import AllProducts from './components/AllProducts/AllProducts.js';
import Cart from './components/Cart/Cart.js';
import Categories from './components/Categories/Categories.js';
import DiscountedProducts from './components/DiscountedProducts/DiscountedProducts.js';
import Main from './components/Main/Main.js';
import NotFound from './components/NotFound/NotFound.js';
import ProductCategory from './components/ProductCategory/ProductCategory.js';
import SingleProduct from './components/SingleProduct/SingleProduct.js';
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
          <Route path="/Cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/DiscountedProducts" element={<DiscountedProducts />} />
          <Route path="/ProductCategory" element={<ProductCategory />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



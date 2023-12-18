import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import OrderDetails from '../OrderDetails/OrderDetails';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.cartContainer}>
      <Link to="/all-products" className={styles.backToStore}>Back to the store &gt;</Link>
      <div className={styles.shoppingCart}>
        <h2>Shopping Cart</h2>
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <OrderDetails />
    </div>
  );
};

export default Cart;

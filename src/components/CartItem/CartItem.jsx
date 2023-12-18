import React from 'react';
import { useCart } from '../../contexts/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemoveClick = () => {
    removeFromCart(item.id);
  };

  const handleQuantityChange = (event) => {
    updateQuantity(item.id, parseInt(event.target.value));
  };

  const priceToDisplay = item.discont_price || item.price;

  return (
    <div className={styles.cartItem}>
      <img src={`${process.env.REACT_APP_API_URL}${item.image}`} alt={item.title} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemTitle}>{item.title}</h3>
        <p className={styles.itemPrice}>${item.price}</p>
        <p>${priceToDisplay}</p>
        <input 
          type="number" 
          value={item.quantity} 
          onChange={handleQuantityChange}
          min="1"
        />
<button onClick={handleRemoveClick} className={styles.removeButton}>&times;</button>
      </div>
    </div>
  );
};

export default CartItem;

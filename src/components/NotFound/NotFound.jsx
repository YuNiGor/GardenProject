import React from 'react';
import notFoundImage from '../../assets/404.svg';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <img src={notFoundImage} alt="Page Not Found" className={styles.notFoundImage} />
    </div>
  );
}

export default NotFound;

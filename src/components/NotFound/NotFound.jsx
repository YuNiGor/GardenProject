import React from 'react';
import saleImage from '../../assets/sale_new_season.png';

function NotFound() {
    return  <div className="sale-image">
                <img src={saleImage} alt="404 Not Found" />
            </div>;
}

export default NotFound;

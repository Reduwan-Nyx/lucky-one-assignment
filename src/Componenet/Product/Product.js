import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, category} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                
            </div>
        </div>
    );
};

export default Product;
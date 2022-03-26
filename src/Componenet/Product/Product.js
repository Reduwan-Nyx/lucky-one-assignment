import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, category} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            
                <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>category: {category}</p>
                <p><small>Price: {price}</small></p>
                </div>
                    <button className='btn-cart'>
                        <p>Add To Cart</p>
                    </button>
        </div>
    );
};

export default Product;
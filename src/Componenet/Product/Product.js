import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    
    const {name, img, price, category} = props.product;

  

    return (
        <div className='product'>
            <img src={img} alt="" />
            
                <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>category: {category}</p>
                <p><small>Price: {price}</small></p>
                </div>
                    <button onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>
                        <p className='btn-text'>Add To Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
        </div>
    );
};

export default Product;
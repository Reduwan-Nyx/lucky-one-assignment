import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Card.css'
const Card = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    console.log(cart);
   
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) =>{
        const newCart =[...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product => <Product key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
                   ></Product>)
               }
            </div>
            <div className="cart-container">
                {
                    cart.map(item => <h4 key={item.id}>{item.name} </h4>)
                }
            </div>
        </div>
    );
};

export default Card;
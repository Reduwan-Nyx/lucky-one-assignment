import React, { useEffect, useState } from 'react';
import Phone from '../Cart/Phone';
import Product from '../Product/Product';
import './Card.css'
const Card = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    console.log(cart);
    const [phone, setPhone] = useState([])





   
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product, item) =>{
        
        const newCart =[...cart, product]
       if(cart.length >= 3){
           return alert('you cant add more')
       } else{
        setCart(newCart)
       }
    }

   

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                   products.map(product => <Product key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
                   phone={phone}
                   ></Product>)
               }
            </div>
            <div className="cart-container">
                <h3 className='cart-text'>Selected Mobile</h3>
                {
                    cart.map(item => <h4 className='cart-info' key={item.id}>{item.name} <img src={item.img} alt="" /></h4>)
                }
               
            </div>
                
        </div>
    );
};

export default Card;
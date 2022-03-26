import React, { useEffect, useState } from 'react';
import Phone from '../Cart/Phone';
import Product from '../Product/Product';
import './Card.css'
const Card = () => {
    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])
    const [getOne, setgetOne] = useState([])

   
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) =>{
        
        const newCart =[...cart, product]
       if(cart.length > 3){
           return alert('you cant add more')
       } else{
        setCart(newCart)
       }
    
    }

    const evenHandler = () =>{
        let newCart = []
        setCart(newCart)
    }


    const getProduct = (cart)=>{
        let getCart = cart[Math.floor(Math.random() * cart.length)]
        setgetOne(getCart)
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
                <h3 className='cart-text'>Selected Mobile</h3>
                {
                    cart.map(item => <h4 className='cart-info' key={item.id}>{item.name} <img src={item.img} alt="" /></h4>)
                }
                <button className='button-cart' onClick={()=> getProduct(cart)}>Choose one</button>
                <p>{getOne.name}</p>  <p className='cart-img'><img  src={getOne.img} alt="" /></p>
                
                <button className='button-cart' onClick={evenHandler}>Choose again</button>
            </div>
                
        </div>
    );
};

export default Card;
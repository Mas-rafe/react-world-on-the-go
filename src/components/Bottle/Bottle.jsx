import React from 'react';
import './bottle.css';

const Bottle = ({ bottle ,handleAddToCart }) => {
    const { img, name, price, seller, ratings,stock } = bottle;
    console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3> {name}</h3>

            <div className='design'>
               <div>
               <p>${price}</p>
               <p>{ratings}</p>
               <p>{stock} remaining</p>
               <p>Give us your review</p>
               <button onClick={() => handleAddToCart(bottle)}>Buy Now </button>
               </div>
               <h2>{seller}</h2>
            </div>
          


        </div>
    )
};







export default Bottle;
import React from 'react';
import './bottle.css';

const Bottle = ({ bottle }) => {
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
               <p>Available:{stock}</p>
               </div>
               <h2>{seller}</h2>
            </div>
          


        </div>
    )
};







export default Bottle;
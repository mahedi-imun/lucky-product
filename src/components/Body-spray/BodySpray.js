import React from 'react';
import './BodySpray.css'
const BodySpray = ({bodySpray,cartHandler}) => {
    const {name, picture,balance} = bodySpray;
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={picture} alt="" />
            </div>
            <div className='card-info'>
                <h4>{name}</h4>
                <h5>Price:$ {balance}</h5>
                <button onClick={()=>cartHandler(bodySpray)} className='cart-btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default BodySpray;
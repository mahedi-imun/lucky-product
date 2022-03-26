import React from 'react';
import './Product.css'
import { FaCartPlus } from 'react-icons/fa';
const Product = ({ bodySpray, cartHandler }) => {
    const { name, picture, balance } = bodySpray;
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={picture} alt="" />
            </div>
            <div className='card-info'>
                <h4>{name}</h4>
                <h5>Price:$ {balance}</h5>
                <button onClick={() => cartHandler(bodySpray)} className='add-cart-btn'>Add To Cart
                    <FaCartPlus className='btn-icon'></FaCartPlus>
                </button>
            </div>
        </div>
    );
};

export default Product;
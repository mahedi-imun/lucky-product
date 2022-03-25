import React from 'react';
import './BodySpray.css'
const BodySpray = ({BodySpray}) => {
    const {name, picture,ballance} = BodySpray;
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={picture} alt="" />
            </div>
            <div className='card-info'>
                <h4>{name}</h4>
                <h5>Price $ {ballance}</h5>
                <button>Add To Cart</button>
            </div>
            
            
        </div>
    );
};

export default BodySpray;
import React from 'react';
import './SelecteProduct.css'
const SelectedProduct = ({ bodySpray }) => {
    const { name, picture } = bodySpray;
    return (
        <div>
            <div className="selected-product-info">
                <img src={picture} alt="" />
                <p>{name}</p>
            </div>
        </div>

    );
};

export default SelectedProduct;

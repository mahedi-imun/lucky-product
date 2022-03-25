import React, { useEffect, useState } from 'react';
import BodySpray from '../Body-spray/BodySpray';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='products-container'>
            <div className='products'>
                {
                    products.map(product => <BodySpray
                        key={product.id}
                        BodySpray={product}
                    ></BodySpray>)

                }
            </div>
            <div className='cart-container'>
                <h1>cart</h1>
            </div>



        </div>
    );
};

export default Products;
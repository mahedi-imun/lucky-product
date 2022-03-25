import React, { useEffect, useState } from 'react';
import BodySpray from '../Body-spray/BodySpray';
import Cart from '../Cart/Cart';
import './Products.css'
const Products = () => {
    const [product, setProduct] = useState([])
    const cartHandler = (bodySpray) => {
        console.log(bodySpray.id);
        if (product.length < 4) {
            const newProduct = [...product, bodySpray]
            setProduct(newProduct)
        }
        else {
            alert('Only Four product to add')
        }
    }
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
                        bodySpray={product}
                        cartHandler={cartHandler}
                    ></BodySpray>)

                }
            </div>
            <div className='cart-container'>
                <Cart product={product}></Cart>
            </div>
        </div>
    );
};

export default Products;
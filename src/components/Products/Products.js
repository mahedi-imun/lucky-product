import React, { useEffect, useState } from 'react';
import BodySpray from '../Body-spray/BodySpray';
import Cart from '../Cart/Cart';
import './Products.css'
const Products = () => {
    const [product, setProduct] = useState([])
    const cartHandler = (bodySpray) => {
        if (product.length < 4) {
            const newProduct = [...product, bodySpray];
            setProduct(newProduct)
        }
        else {
            alert('Only Four product to add')
        }
    }
    const handleRandomProduct = (products) => {
        const getRandomProduct = []
        let randomNum = Math.random() * 9
        let roundRandom = Math.round(randomNum)
        for (let newRandomProduct of products) {
            if (roundRandom === newRandomProduct.id) {
                getRandomProduct.push(newRandomProduct)
                setProduct(getRandomProduct)
            }
        }
    };
    const handleResetCart =()=>{
        setProduct([])
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='product-header'>
                <h2> Save and Safe Body spray shop</h2>
                <h3> maximum choose four body spray</h3>
            </div>
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
                    <Cart product={product}
                        handleRandomProduct={handleRandomProduct}
                        handleResetCart={handleResetCart}
                    ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Products;
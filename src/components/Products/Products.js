import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import swal from 'sweetalert';
import Cart from '../Cart/Cart';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const cartHandler = (selectProducts) => {
        if (cart.length < 4) {
            const newProduct = [...cart, selectProducts];
            setCart(newProduct)
        }
        else {
            swal("Only choose Four product ");
        }
    }
    const handleRandomProduct = () => {
        const newCart = cart;
        const randomItem = newCart[Math.floor(Math.random() * newCart.length)];
        const newRandomItems = [randomItem];
        setCart(newRandomItems)
    };
    const handleResetCart = () => {
        setCart([])
    }
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
                        products.map(product => <Product
                            key={product.id}
                            bodySpray={product}
                            cartHandler={cartHandler}
                        ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart product={cart}
                        handleRandomProduct={handleRandomProduct}
                        handleResetCart={handleResetCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;
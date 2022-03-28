import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Swal from 'sweetalert2'
import Cart from '../Cart/Cart';
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const cartHandler = (selectProducts) => {
        const sameProduct =cart?.findIndex(c => {
            if( c.id == selectProducts.id){
                return true
                
            }
        })
        if (cart.length < 4 && sameProduct <0 ) {
            const newProduct = [...cart, selectProducts];
            setCart(newProduct)
        }
        else if(sameProduct >= 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You cant add same product!',
              })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can add only four product!',
              })
            
        }

    }
    const handleRandomProduct = () => {
        if(cart.length ===0){
            Swal.fire('You cant add any product')
        return
        }
        const newCart = cart;
        const randomItem = newCart[Math.floor(Math.random() * newCart.length)];
        const newRandomItems = [randomItem];
        setCart(newRandomItems)
        const url =newRandomItems[0].picture;
        const name =newRandomItems[0].name;
        Swal.fire({
            title: 'Congratulations! you win',
            text: `${name}`,
            imageUrl:`${url}`,
            imageWidth: 300,
            imageHeight: 250,
            imageAlt: 'Custom image',
          })
    };
    const handleResetCart = () => {
        setCart([])
        Swal.fire({
            title: 'reset your selected product',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
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
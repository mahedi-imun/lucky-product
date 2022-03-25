import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='nav-container'>
            <nav className='nav'>
                <div className='logo'>
                    <h2>Mega spray shop</h2>
                </div>
                <div className='nav-items'>
                <a href="/Home">home</a>
                <a href="/Shop">Shop</a>
                <a href="/cart">Cart</a>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;
import React from "react";

import './Header.css'

function Header() {
    return (
        <header className="header">
            <div class="logo">
                <i class="fa-solid fa-utensils"></i>
                <h1>Chef's Kitchen</h1>
            </div>
            <div className="cart-notification">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>your cart</span>
                <span className="badge">0</span>
            </div>
        </header>
    );
}

export default Header;

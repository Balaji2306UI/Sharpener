import React from "react";

import './Header.css'

function Header(props) {
    return (
        <header className="header">
            <div class="logo">
                <i class="fa-solid fa-utensils"></i>
                <h1>{props.title}</h1>
            </div>
            <div className="cart-notification">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>your cart</span>
                <span className="badge bg-orange">0</span>
            </div>
        </header>
    );
}

export default Header;

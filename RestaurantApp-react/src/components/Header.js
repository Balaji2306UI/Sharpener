import React from "react";

import './Header.css'

function Header(props) {
    return (
        <header className="header">
            <div class="logo">
                <i class="fa-solid fa-utensils"></i>
                <h1>{props.title}</h1>
            </div>
            <button className="cart-notification" onClick={props.showCartHandler}>
                <i class="fa-solid fa-cart-shopping"></i>
                <span>your cart</span>
                <span className="badge bg-orange">0</span>
            </button>
        </header>
    );
}

export default Header;

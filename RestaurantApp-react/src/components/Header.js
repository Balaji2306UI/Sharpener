import React, { useContext } from "react";
import CartContext from "../store/cart-context";

import './Header.css'

function Header(props) {
    const cartCtx = useContext(CartContext);

    let totalCartItems = cartCtx.items.reduce((totalItems, item) => {
        return totalItems + item.count
    }, 0);

    return (
        <header className="header">
            <div className="logo">
                <i class="fa-solid fa-burger"></i>
                <h1>{props.title}</h1>
            </div>
            <button className="cart-notification" onClick={props.showCartHandler}>
                <i className="fa-solid fa-cart-shopping"></i>
                <span>your cart</span>
                <span className="badge bg-orange">{totalCartItems}</span>
            </button>
        </header>
    );
}

export default Header;

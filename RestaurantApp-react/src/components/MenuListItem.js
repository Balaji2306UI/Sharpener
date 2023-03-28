import React, { useContext } from "react";
import CartContext from "../store/cart-context";

function MenuListItem(props) {
    const cartCtx = useContext(CartContext);
    return (
        <>
            <div className="menu-item-details">
                <h4 className="dish-name">{props.name}</h4>
                <p className="dish-desc">{props.description}</p>
                <p className="dish-price text-orange">{`Rs.${props.cost}`}</p>
            </div>
            <div class="menu-item-form bg-orange">
                <button className="btn" onClick={() => cartCtx.removeItem(props.id)}>
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span className="dish-count">{props.count}</span>
                <button className="btn" onClick={() => cartCtx.addItem(props.id)}>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </>
    );
}

export default MenuListItem;

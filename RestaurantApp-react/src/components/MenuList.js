import React, { useContext } from "react";

import "./MenuList.css";
import "../css/styles.css";
import MenuListItem from "./MenuListItem";
import CartContext from "../store/cart-context";

function MenuItems() {
    const cartCtx = useContext(CartContext);

    return (
        <div className="menu-list">
            {cartCtx.items.map((item) => {
                return (
                    <li key={item.id} class="menu-list-item">
                        <MenuListItem
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            cost={item.cost}
                            count={item.count}
                        />
                    </li>
                );
            })}
        </div>
    );
}

export default MenuItems;
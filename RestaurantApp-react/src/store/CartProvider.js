import React, { useState } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
    let menuItems = [
        {
            id: "m1",
            name: "Idly",
            description: "An Indian specialty!",
            cost: 10,
            count: 0,
        },
        {
            id: "m2",
            name: "Masal Dosa",
            description: "An Indian specialty!",
            cost: 60,
            count: 0,
        },
        {
            id: "m3",
            name: "Barota (2 Nos)",
            description: "An Indian specialty!",
            cost: 50,
            count: 0,
        },
        {
            id: "m4",
            name: "Fired Rice",
            description: "An Indian specialty!",
            cost: 100,
            count: 0,
        },
    ];
    const [menu, setMenu] = useState(menuItems);

    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (id) => {
        menu.forEach((item) => {
            if (item.id === id) {
                item.count++;
                setTotalAmount((prevTotal) => {
                    return prevTotal + (item.count * item.cost);
                })
            }
        });
        setMenu([...menu]);
        console.log(totalAmount);
    };

    const removeItemFromCartHandler = (id) => {
        menu.forEach((item) => {
            if (item.id === id && item.count !== 0) {
                item.count--;
            }
        });
        setMenu([...menu]);
        console.log(totalAmount);
    };

    const cartContext = {
        items: menu,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;

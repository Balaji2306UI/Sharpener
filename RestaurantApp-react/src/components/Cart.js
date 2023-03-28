import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/cart-context";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const hasItems = cartCtx.totalAmount > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (id) => {
        cartCtx.addItem(id);
    };

    const cartItems = (
        <ul className="cart-items">
            {cartCtx.items
                .filter((item) => item.count > 0)
                .map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        count={item.count}
                        cost={item.cost}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item.id)}
                    />
                ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>
                    <span className="rupee-sign">&#8377;</span> {totalAmount}
                </span>
            </div>
            <div className="actions">
                <button className="text-orange" onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button className="button">Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;

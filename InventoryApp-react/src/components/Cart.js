
import Modal from "./Modal";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {

    const totalAmount = props.data.totalAmount.toFixed(2);
    const hasItems = props.data.totalAmount > 0;

    const cartItemRemoveHandler = (id) => {
        props.data.removeItem(id);
    };

    const cartItemAddHandler = (id) => {
        props.data.addItem(id);
    };

    const cartItems = (
        <ul className="cart-items">
            {props.data.items
                .filter((item) => item.count > 0)
                .map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        count={item.count}
                        cost={item.price}
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
                {hasItems && <button className="button">Generate Bill</button>}
            </div>
        </Modal>
    );
};

export default Cart;

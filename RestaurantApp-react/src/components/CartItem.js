import "./CartItem.css";

const CartItem = (props) => {
    const cost = props.cost.toFixed(2);

    return (
        <li className="cart-item">
            <div>
                <h3>{props.name}</h3>
                <div className="summary">
                    <span className="cost text-orange"><span className="rupee-sign">&#8377;</span> {cost}</span>
                    <span className="count">x {props.count}</span>
                </div>
            </div>
            <div>
                <button onClick={props.onRemove}><i class="fa-solid fa-minus"></i></button>
                <button onClick={props.onAdd}><i class="fa-solid fa-plus"></i></button>
            </div>
        </li>
    );
};

export default CartItem;

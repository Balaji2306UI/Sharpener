import React from "react";

const Card = (props) => {
    return (
        <div className={props.classes}>
            <div id={props.id} class="card-header text-center bg-dark bg-gradient text-light">
                <h2>
                    {props.cardHeader}
                    {props.logo && (
                        <i class="fa-brands fa-opencart text-warning"></i>
                    )}
                </h2>
                {props.showCartIcon && (
                    <button
                    className="bg-transparent text-light"
                    onClick={props.showCartHandler}>
                    <div className="notification-icon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="badge bg-warning text-dark">
                            {props.totalCartItems}
                        </span>
                    </div>
                    </button>
                )}
            </div>
            <div class="card-body">{props.children}</div>
        </div>
    );
};

export default Card;

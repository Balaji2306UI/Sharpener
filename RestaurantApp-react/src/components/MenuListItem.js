import React from "react";

function MenuListItem(props) {
    return (
        <>
            <div className="menu-item-details">
                <h4 className="dish-name">{props.name}</h4>
                <p className="dish-desc">{props.description}</p>
                <p className="dish-price text-orange">{`Rs.${props.cost}`}</p>
            </div>
            <div class="menu-item-form bg-orange">
                <button className="btn">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span className="dish-count">{props.count}</span>
                <button className="btn">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </>
    );
}

export default MenuListItem;

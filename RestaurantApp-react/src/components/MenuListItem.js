import React from "react";

function MenuListItem(props) {
    return (
        <>
            <h4>{props.name}</h4>
            <p class="dish-desc">{props.description}</p>
            <p class="dish-price">{`Rs.${props.cost}`}</p>
            <hr/>
        </>
    );
}

export default MenuListItem;

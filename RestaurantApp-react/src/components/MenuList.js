import React from "react";

import "./MenuList.css";
import MenuListItem from "./MenuListItem";

function MenuItems(props) {
    return (
        <div class="menu-items">
            {props.data.map((item) => {
                return (
                    <li class="menu-list-item">
                        <MenuListItem
                            name={item.name}
                            description={item.description}
                            cost={item.cost}
                        />
                    </li>
                );
            })}
        </div>
    );
}

export default MenuItems;

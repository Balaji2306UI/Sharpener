import React from "react";

import "./MenuList.css";
import "../css/styles.css";
import MenuListItem from "./MenuListItem";

function MenuItems(props) {
    return (
        <div className="menu-list">
            {props.data.map((item) => {
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
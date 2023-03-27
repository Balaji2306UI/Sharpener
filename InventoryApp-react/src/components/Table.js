import React from "react";

function Table(props) {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button
                                    className="btn"
                                    onClick={() => props.removeItem(item.id)}
                                >
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span className="dish-count">{item.count}</span>
                                <button
                                    className="btn"
                                    onClick={() => props.addItem(item.id)}
                                >
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;

import React from "react";

const Card = (props) => {
    return (
        <div className={props.classes}>
            <div class="card-header text-center bg-dark bg-gradient text-light">
                <h2>
                    {props.cardHeader}
                    {
                        props.logo && <i class="fa-brands fa-opencart text-warning"></i>
                    }
                </h2>
            </div>
            <div class="card-body">{props.children}</div>
        </div>
    );
};

export default Card;

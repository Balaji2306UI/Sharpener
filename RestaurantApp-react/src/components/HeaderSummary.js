import React from "react";

import "./HeaderSummary.css";
import restaurantImage from "../assets/Restaurant-bg.jpg";

function HeaderSummary() {
    return (
        <div class="summary-description">
            <img src={restaurantImage} alt="Restaurant view" />
            <h1 style={{ marginBottom: "30px" }}>
                Delicious <span class="text-orange">Food</span>, Delivered To{" "}
                <span class="text-orange">You</span>
            </h1>
            <p>
                Choose your favourite meal from our braod selection of available
                meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </div>
    );
}

export default HeaderSummary;

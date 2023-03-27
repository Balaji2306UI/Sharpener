import { useState, useEffect, useRef } from "react";

import Input from "./Input";

function Form(props) {
    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [quantityInput, setQuantityInput] = useState("");

    const nameInputRef = useRef();
    const descInputRef = useRef();
    const priceInputRef = useRef();
    const quantityInputRef = useRef();
    useEffect(() => {}, []);

    function nameInputHandler(event) {
        setNameInput(event.target.value);
    }

    function descInputHandler(event) {
        setDescInput(event.target.value);
    }

    function priceInputHandler(event) {
        setPriceInput(parseInt(event.target.value));
    }

    function quantityInputHandler(event) {
        setQuantityInput(parseInt(event.target.value));
    }

    function submitForm(event) {
        event.preventDefault();

        let productDetail = {
            id: Math.random(),
            name: nameInput,
            description: descInput,
            price: priceInput,
            quantity: quantityInput,
            count: 0
        };

        props.onAddNewProduct(productDetail);

        setNameInput("");
        setDescInput("");
        setPriceInput("");
        setQuantityInput("");
    }
    return (
        <form class="row mt-4 mb-4" autoComplete="off" onSubmit={submitForm}>
            <div class="col-md-3 col-sm-12 ">
                <Input
                    ref={nameInputRef}
                    inputId="name"
                    inputType="text"
                    inputPlaceHolder="Enter product name"
                    iconClass="fa-solid fa-tag"
                    value={nameInput}
                    onChange={nameInputHandler}
                />
            </div>
            <div class="col-md-3 col-sm-12 ">
                <Input
                    ref={descInputRef}
                    inputId="desc"
                    inputType="text"
                    inputPlaceHolder="Enter description"
                    iconClass="fa-solid fa-file-signature"
                    value={descInput}
                    onChange={descInputHandler}
                />
            </div>
            <div class="col-md-2 col-sm-6">
                <Input
                    ref={priceInputRef}
                    inputId="price"
                    inputType="number"
                    inputPlaceHolder="Enter product price"
                    iconClass="fa-sharp fa-solid fa-indian-rupee-sign"
                    value={priceInput}
                    onChange={priceInputHandler}
                />
            </div>
            <div class="col-md-2 col-sm-6">
                <Input
                    ref={quantityInputRef}
                    inputId="quantity"
                    inputType="number"
                    inputPlaceHolder="Enter quantity"
                    iconClass="fa-solid fa-layer-group"
                    value={quantityInput}
                    onChange={quantityInputHandler}
                />
            </div>
            <div class="col-md-2 col-sm-12 d-grid">
                <button class="btn btn-warning" type="submit">
                    Place Order
                </button>
            </div>
        </form>
    );
}

export default Form;

import React, { useState } from "react";

import Card from "./components/Card";
import Form from "./components/Form";
import Table from './components/Table';
import Cart from './components/Cart'

function App() {
	const products = [
		
	];

	const [productsData, setProductsData] = useState(products);
	const [totalAmount, setTotalAmount] = useState(0);
	const [isCartShown, setIsCartShown] = useState(false);

	let totalCartItems = productsData.reduce((totalItems, item) => {
        return totalItems + item.count;
    }, 0);

	function onAddNewProduct(product) {
		setProductsData((prevState) => {
			return [product, ...prevState]
		});
	}

	function addItem(id) {
		productsData.forEach((item) => {
            if (item.id === id) {
                item.count++;
                setTotalAmount((prevTotal) => {
                    return prevTotal + item.cost;
                })
            }
        });
        setProductsData([...productsData]);
	}

	const removeItem = (id) => {
        productsData.forEach((item) => {
            if (item.id === id && item.count !== 0) {
                item.count--;
                setTotalAmount((prevTotal) => {
                    return prevTotal - item.cost;
                })
            }
        });
        setProductsData([...productsData]);
    };

	function showCartHandler() {
        setIsCartShown(true);
    }

    function hideCartHandler() {
        setIsCartShown(false);
    }

	const cartDataObj = {
        items: productsData,
        totalAmount: totalAmount,
        addItem,
        removeItem
    };

    return (
		<>
		{isCartShown && <Cart data={cartDataObj} onClose={hideCartHandler} />}
        <div className="container mt-5">

            <Card id="main-header" classes="card" cardHeader="BetterDeals" logo="true" showCartIcon="true" totalCartItems={totalCartItems} showCartHandler={showCartHandler}>
				<Form onAddNewProduct={onAddNewProduct}/>
			</Card>
			<Card classes="card text-center mt-5 mx-auto" cardHeader="Summary">
				<Table data={productsData} removeItem={removeItem} addItem={addItem} />
			</Card>
        </div>
		</>
    );
}

export default App;

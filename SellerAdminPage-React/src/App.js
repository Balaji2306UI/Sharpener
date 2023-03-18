import React, { useState } from "react";

import Card from "./components/Card";
import Form from "./components/Form";
import Products from './components/Products'

function App() {
	const products = [
		{
			name: 'sample',
			price: 100,
			category: 'home'
		}
	];

	const [productsData, setProductsData] = useState(products);

	function onAddNewProduct(product) {
		setProductsData((prevState) => {
			return [product, ...prevState]
		});
	}

	let total = 0
	function getTotal() {
		for(product in productsData) {
			total += product.price;
		}
	}

    return (
        <div className="container mt-5">
            <Card cardHeader="BetterDeals">
				<Form onAddNewProduct={onAddNewProduct}/>
			</Card>
			<Card cardHeader="Summary">
				<Products data={productsData} />
			</Card>
			<div>{`Total Amount: ${getTotal()}`}</div>
        </div>
    );
}

export default App;

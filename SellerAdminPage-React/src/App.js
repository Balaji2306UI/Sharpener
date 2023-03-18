import React, { useState } from "react";

import Card from "./components/Card";
import Form from "./components/Form";
import Products from './components/Products'

function App() {
	const products = [
		{
			id: 'g1',
			name: 'sample',
			price: 100,
			category: "Grocery"
		}
	];

	const [productsData, setProductsData] = useState(products);

	function onAddNewProduct(product) {
		setProductsData((prevState) => {
			return [product, ...prevState]
		});
	}

	
	function getTotal() {
		let total = 0
		for(let product of productsData) {
			total += parseInt(product.price);
		}
		return total;
	}

    return (
        <div className="container mt-5">
            <Card classes="card" cardHeader="BetterDeals" logo="true">
				<Form onAddNewProduct={onAddNewProduct}/>
			</Card>
			<Card classes="card text-center mt-5 mx-auto col-md-6" cardHeader="Summary">
				<Products data={productsData} />
			</Card>
			<div>{`Total Amount: ${getTotal()}`}</div>
        </div>
    );
}

export default App;

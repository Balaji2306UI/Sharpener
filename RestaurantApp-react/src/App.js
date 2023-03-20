import React from "react";

import Header from "./components/Header";
import HeaderSummary from "./components/HeaderSummary";
import MenuItems from "./components/MenuList";
import "./css/styles.css";

function App() {
	const menutItems = [
		{
			name: 'sample1',
			description: 'An Indian specialty!',
			cost: 100
		},
		{
			name: 'sample2',
			description: 'An Indian specialty!',
			cost: 200
		}
	];
    return (
        <React.Fragment>
            <Header title="Chef's Kitchen" />
            <HeaderSummary />
			<MenuItems data={menutItems} />
        </React.Fragment>
    );
}

export default App;

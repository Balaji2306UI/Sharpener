import React from "react";

import Header from "./components/Header";
import HeaderSummary from "./components/HeaderSummary";
import MenuList from "./components/MenuList";
import "./css/styles.css";

function App() {
	const menutItems = [
		{
			id: 'm1',
			name: 'Idly',
			description: 'An Indian specialty!',
			cost: 10,
			count: 0
		},
		{
			id: 'm2',
			name: 'Masal Dosa',
			description: 'An Indian specialty!',
			cost: 60,
			count: 0
		},
		{
			id: 'm3',
			name: 'sample1',
			description: 'An Indian specialty!',
			cost: 100,
			count: 0
		},
		{
			id: 'm4',
			name: 'Fired Rice',
			description: 'An Indian specialty!',
			cost: 100,
			count: 0
		}
	];
    return (
        <React.Fragment>
            <Header title="Chef's Kitchen" />
            <HeaderSummary />
			<MenuList data={menutItems} />
        </React.Fragment>
    );
}

export default App;

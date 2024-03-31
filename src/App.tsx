import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
	return (
		<div className="App">
			<Rating/>
			<Accordion />
			<Rating/>

		</div>
	)
}


export default App;


import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";

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

function Rating() {
	console.log("How many time rendered REITING")
	return (
		<>
		<Star />
		<Star />
		<Star />
		<Star />
		<Star />
		</>

	)
}
function Star () {
	console.log("How many time rendered STAR")
	return(
		<div>
			<div>star</div>
		</div>
	)
}


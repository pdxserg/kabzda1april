import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
	return (
		<div className="App">
			<PageTitle titl = "This is App component"/>
			<PageTitle title = "This component"/>
			<Rating value ={0}/>
			<Accordion title = "Menu"/>
			<Accordion title = "List"/>
			<Rating value ={4}/>

		</div>
	)
}


export default App;

function PageTitle(props: any) {
	return (
		<h1>{props.title}</h1>
	)
}
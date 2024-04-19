import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledaccordion/UncontrolledAccordion";

function App() {
	return (
		<div className="App">
			<OnOff />
			<OnOff />
			<OnOff />


			<UncontrolledAccordion titleValue = "Menu" />
			<UncontrolledAccordion titleValue="List" />

			{/*<PageTitle title = "This is App component"/>*/}
			{/*<PageTitle title = "This component"/>*/}
			{/*<Rating value={0}/>*/}

			{/*<Rating value ={0}/>*/}
			{/*<Rating value ={1}/>*/}
			{/*<Rating value ={2}/>*/}
			{/*<Rating value ={3}/>*/}
			{/*<Rating value ={4}/>*/}
			{/*<Rating value ={5}/>*/}

		</div>
	)
}


export default App;
type PageTitlepropsType= {
	title: string
}
function PageTitle(props: PageTitlepropsType) {
	return (
		<h1>{props.title}</h1>
	)
}
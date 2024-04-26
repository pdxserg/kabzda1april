import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {RaitinNumber, Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledaccordion/UncontrolledAccordion";
import {UncontrolRating} from "./components/uncontrolRating/UncontrolRating";

function App() {

	let [raitinValue,  setRaitinValue]=useState<RaitinNumber>(4)
	let [newCollapsed, setNewCollapsed]=useState<boolean>(false)

	return (
		<div className="App">
			<OnOff/>
			<div>UncontrolRating</div>
			<UncontrolRating/>

			<div>Rating</div>
			<Rating value={raitinValue} setRait={setRaitinValue} />


			<UncontrolledAccordion titleValue="UncontrolledAccordion"/>

			<Accordion titleValue={"Accordion"}  collapsed={newCollapsed} />

			{/*<PageTitle title = "This is App component"/>*/}
			{/*<PageTitle title = "This component"/>*/}
			{/*<Rating value={0}/>*/}


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
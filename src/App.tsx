import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
	return (
		<div className="App">
			<PageTitle title = "This is App component"/>
			<PageTitle title = "This component"/>
			<Rating value={0}/>
			<Accordion titleValue = "Menu" collapsed={true}/>
			<Accordion titleValue="List" collapsed={false}/>
			<Rating value ={4}/>

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
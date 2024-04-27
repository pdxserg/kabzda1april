import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {RaitinNumber, Rating} from "./components/rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/uncontrolledaccordion/UncontrolledAccordion";
import {UncontrolRating} from "./components/uncontrolRating/UncontrolRating";
import {UncontrolOnOff} from "./components/uncontrolOnOff/UncontrolOnOff";

function App() {

	const [raitinValue,  setRaitinValue]=useState<RaitinNumber>(4)

	//for Accordion
	const [isAccordionCollapsed, setIsAccordionCollapsed]=useState<boolean>(false)
	const accordionChangeHandler= ()=>{ setIsAccordionCollapsed(!isAccordionCollapsed)}

	//for   OnOff
	let [on, setOn]= useState(true)




	return (
		<div className="App">
			<UncontrolOnOff onChange={setOn}/>
			{on.toString()}
			<OnOff on={on} switchHandler={(v)=>setOn(v)}/>


			{/*<div>UncontrolRating</div>*/}
			{/*<UncontrolRating/>*/}

			{/*<div>Rating</div>*/}
			{/*<Rating value={raitinValue} setRait={setRaitinValue} />*/}


			{/*<UncontrolledAccordion titleValue="UncontrolledAccordion"/>*/}

			<Accordion titleValue={"Accordion"}
			           collapsed={isAccordionCollapsed}
			           accordionChangeHandler={accordionChangeHandler}
			/>

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
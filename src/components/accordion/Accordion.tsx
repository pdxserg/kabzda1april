import React from "react";

export function Accordion(props:any) {
	console.log("Accordion")
	return (
		<>
			<AccordionTitle title={ props.title}/>
			<AccordionBody />

		</>
	)
}

function AccordionTitle(props: any) {
	console.log("How many time rendered AccordionTitle")
	return (
		<h3>{props.title}</h3>

	)

}

function AccordionBody() {
	console.log("How many time rendered AccordionBody")
	return (

		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>

	)
}
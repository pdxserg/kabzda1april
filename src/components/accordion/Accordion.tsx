import React from "react";

export function Accordion() {
	console.log("Accordion")
	return (
		<>
			<AccordionTitle/>
			<AccordionBody/>
		</>
	)
}

function AccordionTitle() {
	console.log("How many time rendered AccordionTitle")
	return (
		<h3>Menu</h3>

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
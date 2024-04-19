import React from "react";
type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {
		// if (props.collapsed === true){
		// 	return (
		// 		<AccordionTitle title={ props.titleValue}/>
		// 	)
		// }
		return(
			<>
				<AccordionTitle title={ props.titleValue}/>
				{/*{props.collapsed === false && <AccordionBody/>}*/}
				{!props.collapsed && <AccordionBody/>}

			</>
		)
}
type AccordionTitlePropsType = {
	title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
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
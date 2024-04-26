import React, {useState} from "react";
type AccordionPropsType = {
	titleValue: string
	//collapsed: boolean
}
export function Accordion(props:AccordionPropsType) {
		// if (props.collapsed === true){
		// 	return (
		// 		<AccordionTitle title={ props.titleValue}/>
		// 	)
		// }
	let [coll, setColl]=useState(false)

		return(
			<>
				<AccordionTitle title={ props.titleValue} onCl={()=>setColl(!coll)}/>
				{/*{props.collapsed === false && <AccordionBody/>}*/}
				{!coll&& <AccordionBody/>}

			</>
		)
}
type AccordionTitlePropsType = {
	title: string
	onCl: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType) {
	return (
		<h3 onClick={props.onCl}>{props.title}</h3>

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
import React  from "react";
export type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
	accordionChangeHandler: ()=>void

}
export function Accordion(props:AccordionPropsType) {
	// 	return
	// if (props.collapsed === true){
	// 		return (
	// 			<AccordionTitle title={ props.titleValue}/>
	// 		)
	// 	}


		return(
			<>
				<AccordionTitle title={ props.titleValue}
				            onCl={props.accordionChangeHandler}
				/>

				{!props.collapsed && <AccordionBody/>}
				{/*{props.collapsed === false && <AccordionBody/>}*/}
			</>
		)
}
type AccordionTitlePropsType = {
	title: string
	onCl?: ()=>void

}
function AccordionTitle(props: AccordionTitlePropsType) {
	return (
		<h3  onClick={props.onCl}>{props.title}</h3>

	)

}

function AccordionBody() {

	return (

		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>

	)
}
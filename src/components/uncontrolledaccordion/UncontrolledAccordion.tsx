import React, {useState} from "react";
type AccordionPropsType = {
	titleValue: string
	//collapsed: boolean
}
export function UncontrolledAccordion(props:AccordionPropsType) {
		// if (props.collapsed === true){
		// 	return (
		// 		<AccordionTitle title={ props.titleValue}/>
		// 	)
		// }
	let [collapsed, setCollapsed] =useState(true)

function toggleHandler () {
		if(collapsed === true){
			setCollapsed(false)
		}else {setCollapsed(true)}

}
		return(
			<>
				<button onClick={toggleHandler}>Toggle</button>
				<AccordionTitle title={props.titleValue}/>

				{/*{props.collapsed === false && <AccordionBody/>}*/}
				{!collapsed && <AccordionBody/>}

			</>
		)
}

type AccordionTitlePropsType = {
	title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {

	return (
		<h3>{props.title}</h3>

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
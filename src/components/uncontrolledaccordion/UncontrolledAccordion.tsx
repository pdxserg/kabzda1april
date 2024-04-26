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
	let [collapsed, setCollapsed] =useState(false)


		return(
			<>
				{/*<button onClick={}>Toggle</button>*/}
				<AccordionTitle title={props.titleValue} oncl={()=>setCollapsed(!collapsed)}/>

				{/*{props.collapsed === false && <AccordionBody/>}*/}
				{!collapsed && <AccordionBody/>}

			</>
		)
}

type AccordionTitlePropsType = {
	title: string
	oncl: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {

	return (
		<h3 onClick={props.oncl}>{props.title}</h3>

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
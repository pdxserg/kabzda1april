import React, {useState} from "react";
type AccordionPropsType = {
	titleValue: string
	//collapsed: boolean
}
 function UncontrolledAccordionMemo(props:AccordionPropsType) {
		// if (props.collapsed === true){
		// 	return (
		// 		<AccordionTitle title={ props.titleValue}/>
		// 	)
		// }
	const [collapsed, setCollapsed] =useState(false)

	console.log("dd")
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
export const UncontrolledAccordion= React.memo(UncontrolledAccordionMemo)
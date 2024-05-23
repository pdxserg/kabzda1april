import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type AccordionPropsType = {
	titleValue: string
	//collapsed: boolean
}

export function UncontrolledAccordionReduser(props:AccordionPropsType) {
		// if (props.collapsed === true){
		// 	return (
		// 		<AccordionTitle title={ props.titleValue}/>
		// 	)
		// }
	// const [collapsed, setCollapsed] =useState(false)
	const [state, dispatch] =useReducer(reducer, {collapsed: false})


		return(
			<>
				{/*<button onClick={}>Toggle</button>*/}
				{/*<AccordionTitle title={props.titleValue} oncl={()=>setCollapsed(!collapsed}/>*/}
				<AccordionTitle title={props.titleValue}
				                oncl={()=> {dispatch({type:TOGGLE_CONSTANT})}}/>


				{/*{props.collapsed === false && <AccordionBody/>}*/}
				{!state.collapsed && <AccordionBody/>}

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
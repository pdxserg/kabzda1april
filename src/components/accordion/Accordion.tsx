import React  from "react";
export type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
	accordionChangeHandler: ()=>void

}
 function AccordionMemo(props:AccordionPropsType) {
	// 	return
	// if (props.collapsed === true){
	// 		return (
	// 			<AccordionTitle title={ props.titleValue}/>
	// 		)
	// 	}
	 console.log(222)

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
export const Accordion= React.memo(AccordionMemo)
import React from "react";

export type RaitinNumber = 1|2|3|4|5

type RatingPropsType = {
	value: RaitinNumber
	setRait:(val:RaitinNumber)=>void
}
export function Rating(props: RatingPropsType ) {
	return (
		<div>
			<Star selected={props.value > 0} oncl={props.setRait} value={1}/>
			<Star selected={props.value > 1} oncl={props.setRait} value={2}/>
			<Star selected={props.value > 2} oncl={props.setRait} value={3}/>
			<Star selected={props.value > 3} oncl={props.setRait} value={4}/>
			<Star selected={props.value > 4} oncl={props.setRait} value={5}/>

		</div>
			)
			}
type StartPropsType= {
	selected: boolean
	oncl:(val: RaitinNumber)=>void
	value: RaitinNumber
}
function Star(props: StartPropsType) {
	return <span onClick={()=>props.oncl(props.value)} >{props.selected ? <b  >star </b>  : 'star ' }</span>

}
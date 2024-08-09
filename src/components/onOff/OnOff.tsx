// @flow
import * as React from 'react';


type onOffProps = {
	on: boolean
	switchHandler: (v:boolean)=>void
};



export const OnOff = (props: onOffProps) => {

	// let [on, setOn]= useState(false)
	// const turnOff =() => {on = false; setOn(false)}
	//const turnOn =() => {on = true; setOn(true)}

	const onStyle={
		cursor: "pointer",
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		backgroundColor: props.on ? "green" : "white"
	}
	const offStyle={
		cursor: "pointer",
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: props.on ?"white": "red"
	}
	const indicatorStyle={
		width:"10px",
		height:"10px",
		borderRadius:"5px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: props.on ?"yellow": "white"
	}
	return (
		<div>
			<div style={onStyle} onClick={()=>props.switchHandler(true)}>on</div>
			<div style={offStyle} onClick={()=>props.switchHandler(false)}>off</div>
			<div style={indicatorStyle}></div>
 		</div>
	);
};
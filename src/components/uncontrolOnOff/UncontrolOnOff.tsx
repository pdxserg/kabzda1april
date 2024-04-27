// @flow
import * as React from 'react';
import {useState} from "react";

type onOffProps = {
onChange: (on: boolean)=>void
};



export const UncontrolOnOff = (props: onOffProps) => {

	let [on, setOn]= useState(true)


	const onStyle={
		cursor: "pointer",
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		backgroundColor: on ? "green" : ""
	}
	const offStyle={
		cursor: "pointer",
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: on ?"": "red"
	}
	const indicatorStyle={
		width:"10px",
		height:"10px",
		borderRadius:"5px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: on ?"yellow": ""
	}

	const onClicked =()=>{
		setOn(true)
		props.onChange(true)}
	const offClicked = ()=>{
		setOn(false)
		props.onChange(false)}
	return (
		<div>
			<div style={onStyle} onClick={onClicked}  >on</div>
			<div style={offStyle} onClick={offClicked}  >off</div>
			<div style={indicatorStyle}></div>
 		</div>
	);
};
















//const turnOn =() => {on = true; setOn(true)}
//const turnOff =() => {on = false; setOn(false)}

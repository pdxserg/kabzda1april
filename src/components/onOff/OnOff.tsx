// @flow
import * as React from 'react';

type onOffProps = {
	//on: boolean
};

const on = !true

export const OnOff = (props: onOffProps) => {
	const onStyle={
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		backgroundColor: on ? "green" : "white"
	}
	const offStyle={
		width:"30px",
		height:"20px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: on ?"white": "red"
	}
	const indicatorStyle={
		width:"10px",
		height:"10px",
		borderRadius:"5px",
		border: "1px solid black",
		display: "inline-block",
		marginLeft: "10px",
		backgroundColor: on ?"yellow": "white"
	}
	return (
		<div>
			<div style={onStyle}>on</div>
			<div style={offStyle}>off</div>
			<div style={indicatorStyle}></div>
 		</div>
	);
};
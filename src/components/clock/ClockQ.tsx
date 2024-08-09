import React, {useEffect, useState} from "react";
import {ClockD} from "./ClockD";
import {ClockA} from "./ClockA";

type ClockQPropsType = {
	frame: "digital" | "analog"
}
export const ClockQ = ({frame}: ClockQPropsType) => {

	const [date, setDate] = useState(new Date())


	useEffect(() => {
		const intervalID = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => {
			clearInterval(intervalID)
		}
	}, []);

	let clock
	switch (frame) {
		case "digital":
			clock = <ClockD date={date}/>
			// <div>{padWithZero(date.getHours())}:{padWithZero(date.getMinutes())}:{padWithZero(date.getSeconds())} </div>
			break;

		case "analog" :
		default:
			clock = <ClockA/>
	}
	return (
		<>
			{clock}
		</>
	)
}
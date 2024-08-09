import React, {useEffect, useState} from "react";
import {Clock} from "./Clock";
import {ClockD} from "./ClockD";


export default {
	title: 'Clock',
	component: Clock,
};
export const Analog = () => {

	return <Clock frame={false}/>
}
export const Digital = () => {

	return <Clock frame={true}/>
}
export const ClockDigital = () => {

	return <ClockQ frame={"digital"}/>
}
export const ClockAnalog = () => {

	return <ClockQ frame={"analog"}/>
}

type ClockQPropsType = {
	frame: "digital" | "analog"
}

const padWithZero = (num: number) => {
	return num < 10 ? "0" + num : num
}
const ClockQ = ({frame}: ClockQPropsType) => {

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
			clock = <ClockD date ={date}/>
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
type ClockPropsType = {
	date: Date
}
const ClockA =()=> {

	return <span>analog</span>

}
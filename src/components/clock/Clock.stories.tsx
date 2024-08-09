import React from "react";
import {Clock} from "./Clock";
import {ClockQ} from "./ClockQ";


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




import React from "react";
import {ClockPropsType, padWithZero} from "./Clock";





export const ClockD: React.FC<ClockPropsType> = ({date}) => {
	let hours = date.getHours()
	hours = hours % 12
	hours = hours ? hours : 12;
	const minutes: any = padWithZero(date.getMinutes())
	const seconds = padWithZero(date.getSeconds())
	const ampm = hours >= 12 ? ' am' : ' pm';

	return <div className="digit-clock">
		{hours}:{minutes}:{seconds}{ampm}</div>

}
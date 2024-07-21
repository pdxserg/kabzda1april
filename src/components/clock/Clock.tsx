import {useEffect, useState} from "react";


type Clocktype = {}
const padWithZero =(num:number)=>{
	return num < 10 ? "0"+num :num
}
export const Clock = (props: Clocktype) => {
// export const Clock:React.FC<Clocktype>  =(props)=>{
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	}, []);

	const hours =padWithZero(date.getHours())
	const minutes = padWithZero(date.getMinutes())
	const seconds = padWithZero(date.getSeconds())
	return (
		<div>
			<h2>{date.toDateString()}</h2>
			<span>{hours}</span>
			:
			<span>{minutes}</span>
			:
			<span>{seconds}</span>

		</div>
	)
}
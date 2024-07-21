import {useEffect, useState} from "react";


type Clocktype = {}
export const Clock = (props: Clocktype) => {
// export const Clock:React.FC<Clocktype>  =(props)=>{
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	}, []);

	const seconds = date.getSeconds() < 10
		? "0"+date.getSeconds()
		:date.getSeconds()

	const minutes = date.getMinutes() < 10
		? "0"+date.getMinutes()
		:date.getMinutes()

	const hours = date.getHours() < 10
		? "0"+date.getHours()
		:date.getHours()
const padWithZero =(a)=>{
	a < 10 ? "0"+a :a
}
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
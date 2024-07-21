import {useState} from "react";


type Clocktype={}
// const Clock =(props: Clocktype)=>{
const Clock:React.FC<Clocktype>  =(props)=>{
	const [date,setDate]=useState(new Date())
	return(
		<div>
			<span>{date.getHours()}</span>
			:
			<span>{date.getMinutes()}</span>
			:
			<span>{date.getSeconds()}</span>

		</div>
	)
}
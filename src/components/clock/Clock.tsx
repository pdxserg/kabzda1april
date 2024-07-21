import {useEffect, useState} from "react";
import './Clock.css';



type Clocktype = {}
const padWithZero =(num:number)=>{
	return num < 10 ? "0"+num :num
}
export const Clock = (props: Clocktype) => {
// export const Clock:React.FC<Clocktype>  =(props)=>{
	const [date, setDate] = useState(new Date())

	useEffect(() => {

		const intervalID= setInterval(() => {
			console.log("tick")
			setDate(new Date())
		}, 1000)
		return ()=>{
			  clearInterval(intervalID)
		}

	}, []);

	const hours =padWithZero(date.getHours())
	const minutes = padWithZero(date.getMinutes())
	const seconds = padWithZero(date.getSeconds())
	return (
		<div className="clock">

			<div className="digit-clock">{hours}:{minutes}:{seconds}</div>


			<div className="hour_hand"
			     style={{
				     transform: `rotateZ(${date.getHours() * 6}deg)`
			     }}>
			</div>
			<div className="min_hand"
			     style={{
				     transform: `rotateZ(${date.getMinutes() * 6}deg)`
			     }}>
			</div>
			<div className="sec_hand"
			     style={{
				     transform: `rotateZ(${date.getSeconds() * 6}deg)`
			     }}>
			</div>

			<span className="twelve">12</span>
			<span className="one">1</span>
			<span className="two">2</span>
			<span className="three">3</span>
			<span className="four">4</span>
			<span className="five">5</span>
			<span className="six">6</span>
			<span className="seven">7</span>
			<span className="eight">8</span>
			<span className="nine">9</span>
			<span className="ten">10</span>
			<span className="eleven">11</span>

		</div>
	)
}
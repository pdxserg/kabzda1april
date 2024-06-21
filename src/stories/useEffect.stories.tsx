import {useEffect, useState} from "react";
import {log} from "node:util";

export default {
	title: "useEffect demo"
}
export const SimpleExample = () => {

	const [counter, setCounter] = useState(1)
	const [fake, setFake] = useState(1)
	console.log("useEffect demo")


	useEffect(() => {
		console.log("useEffect wil render every time")
	})

	useEffect(() => {
		console.log("useEffect only one time")
	},[])

	useEffect(() => {
		console.log("useEffect wil render one time+ if counter changed")
		document.title= counter.toString()
	})

	return (
		<>
			Hello: {counter}
			<button onClick={() => setCounter(counter + 1)}>+</button>
			<button onClick={() => setFake(fake + 1)}>fake</button>

		</>
	)
}

export const setTimeOut = () => {

	const [counter, setCounter] = useState(1)
	const [fake, setFake] = useState(1)
	console.log("use  demo")


	useEffect(() => {
		setInterval(() => {
			console.log("setTimeout")
			document.title= counter.toString()
		},1000)
	},[counter])
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		console.log("setTimeout")
	// 		document.title= counter.toString()
	// 	},1000)
	// },[counter])


	return (
		<>
			Hello: {counter} {fake}
			<button onClick={() => setCounter(counter + 1)}>s+</button>
			<button onClick={() => setFake(fake + 1)}>fake</button>zz
			<div>
				<p>Current Date and Time: {new Date().toLocaleString()}</p>
			</div>
		</>
	)
}

export const setDate = () => {

	const [date, setDate] = useState(0)

	console.log("use  demo")


	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log("setTimeout")
 // setDate(state=> state+1)
	// 	},1000 )
	// },[  ])


	return (
		<>
			1:22:{date}pm
		</>
	)
}


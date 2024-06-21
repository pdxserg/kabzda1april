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
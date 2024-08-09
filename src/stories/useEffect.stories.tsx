import {useEffect, useState} from "react";

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
	}, [])

	useEffect(() => {
		console.log("useEffect wil render one time+ if counter changed")
		document.title = counter.toString()
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


	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log("setTimeout")
	// 		document.title= counter.toString()
	// 	},1000)

	// },[counter])


	return (
		<>
			Hello: {counter} {fake}
			<button onClick={() => setCounter(counter + 1)}>s+</button>
			<button onClick={() => setFake(fake + 1)}>fake</button>

		</>
	)
}

export const setSecond = () => {

	const [date, setDate] = useState(0)

	console.log("use  demo")


	useEffect(() => {

		const setIntervalSecond = setInterval(() => {
			setDate(state => state + 1)
		}, 1000)
		console.log("setTimeout")
		return () => {
			console.log("clearInterval(setIntervalSecond)")
			clearInterval(setIntervalSecond)
		}

	}, [])


	return (
		<>
			22:13:{date}pm
		</>
	)
}


export function Clock() {
	const [date, setDate] = useState(new Date());

	console.log("clock")
	useEffect(() => {
		console.log("useEffect")
		const timer = setInterval(() => setDate(new Date()), 1000);
		console.log("setInterval")
		return () => {
			console.log("clearInterval(timer)")
			clearInterval(timer)
		}
	}, []);

	return (
		<div>
			<h2>{date.toLocaleString()} </h2>
		</div>
	);
}

export const ReseEffectExample = () => {
	const [count, setCount] = useState(1)
	console.log("render ReseEffectExample")
	useEffect(() => {
		console.log("use effect")
	}, [count]);

	return <>
		Hello {count}
		<button onClick={() => {
			setCount(count + 1)
		}}>+
		</button>

	</>
}
export const Keystype = () => {
	const [text, setText] = useState('')
	console.log("render  ")
	useEffect(() => {
		const handler = ((e:KeyboardEvent) => {
			console.log(e.key)
			setText(text + e.key)
		})
		window.addEventListener('keypress',handler )
		 return ()=>{
			window.removeEventListener('keypress',handler)
		 }
	}, [text]);

	return <>
		Type {text}

	</>
}
import React, {useMemo, useState} from "react";
export default {
	title: 'Use.memo demo'
}


const SetCounter2 = (props: { count: number }) => {
	console.log("count")
	return <div>{props.count}</div>
}
const Counter2= React.memo(SetCounter2)

const SupBooks = (props: { newArray: Array<string> }) => {
	console.log("book")
	return <div>
		{props.newArray.map((e, i) => <div key={i}>{e}</div>)}
	</div>
}

const Books= React.memo(SupBooks)


export const Example2 = () => {
	const [count, setCount] = useState(0)
	const [books, setUsers] = useState(['JS', 'HTML', 'CSS'])

	const newArr = useMemo(() => {
		const newArr = books.filter(b => b.toLowerCase().indexOf("a") > -1)
		return newArr
	}, [books])
	const handler = ()=> {
		setUsers([...books, 'React'])
	}

	return <>
		<Counter2 count={count}/>
		<Books newArray={newArr}/>
		<button onClick={handler}>new book</button>
		<button onClick={() => setCount(count + 1)}>+</button>
	</>
}
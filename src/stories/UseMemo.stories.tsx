import React, {useCallback, useMemo, useState} from "react";
import {example2} from "./UseMemoUseCallBack.stories";

export default {
	title: 'Use.memo demo'
}


export const Example2 = () => {
	console.log("counter")
	const [count, setCount] = useState(0)
	const [books, setUsers] = useState(['JS', 'HTML', 'CSS'])


	const addBook = ()=> {
		setUsers([...books, 'React'])
	}
	const memorized1 =useMemo(()=>{
		 return addBook
	},[books])

///===========================
// 	const memorized =useMemo(()=>{
// 		return ()=> {
// 		setUsers([...books, 'React'])
// 	}},[books])
	//========================

	const memorized = useCallback(()=>{
		setUsers([...books, 'React'])
	},[books])


	return <>
		<Books addBook={memorized}/>
		<Counter count={count}/>

		<button onClick={() => setCount(count + 1)}>+</button>
	</>
}
const SupBooks = (props: { addBook: () => void }) => {
	console.log("book")
	return <div>
		<button onClick={props.addBook}>new book</button>

	</div>
}
const Books = React.memo(SupBooks)

const Counter = (props: { count: number }) => {
	return <div>
		{props.count}
	</div>
}

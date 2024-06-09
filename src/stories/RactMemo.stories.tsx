import React, {useState} from "react";
export default {
	title: 'React.memo demo'
}

const SetCounter = (props: { count: number }) => {
	console.log("count")
	return <div>{props.count}</div>
}
const Counter= React.memo(SetCounter)

const SupUsers = (props: { users: Array<string> }) => {
	console.log("name")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users= React.memo(SupUsers)


export const Example1 = () => {
	const [count, setCount] = useState(0)
	const [users, setUsers] = useState(['Bob', 'Chack', 'Den'])
	const handler = ()=> {
		setUsers([...users, 'ddd'])
	}

	return <>
		<Counter count={count}/>
		<Users users={users}/>
		<button onClick={handler}>new user</button>
		<button onClick={() => setCount(count + 1)}>+</button>
	</>
}


const SetCounter2 = (props: { count: number }) => {
	console.log("count")
	return <div>{props.count}</div>
}
const Counter2= React.memo(SetCounter2)

const SupBooks = (props: { books: Array<string> }) => {
	console.log("book")
	return <div>
		{props.books.map((b, i) => <div key={i}>{b}</div>)}
	</div>
}

const Books= React.memo(SupBooks)


export const Example2 = () => {
	const [count, setCount] = useState(0)
	const [books, setUsers] = useState(['JS', 'HTML', 'CSS'])
	console.log(books)
	const handler = ()=> {
		setUsers([...books, 'React'])
	}

	return <>
		<Counter2 count={count}/>
		<Books books={books}/>
		<button onClick={handler}>new book</button>
		<button onClick={() => setCount(count + 1)}>+</button>
	</>
}
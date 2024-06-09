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


import React, {useState} from "react";

export default {
	title: 'React.memo demo'
}


const SetCounter = (props: { count: number }) => {
	console.log("count")
	return <div>{props.count}</div>
}
const Counter= React.memo(SetCounter)




type UsersType = {
	users: Array<string>
}

const SupUsers = (props: UsersType) => {
	console.log("name")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users= React.memo(SupUsers)





export const Example1 = () => {
	const [count, setCount] = useState(2)
	const [users, setUsers] = useState(['Bob', 'Chack', 'Den'])
	const handler = ()=> {
		setUsers([...users, 'ddd'])
	}


	return <>
		<button onClick={handler}>new user</button>
		<button onClick={() => setCount(count + 1)}>+</button>
		<Counter count={count}/>
		<Users users={users}/>

	</>
}
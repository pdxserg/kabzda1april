export default {
	title:'React.memo demo'
}


const Counter= (props:{count: number})=>{
	return <div>{props.count}</div>
}

const Users  =(props: {users: Array<string>})=>{
	return <div>
		{props.users.map((u,i)=><div key={i}>{u}</div>)}
	</div>
}




export const Example1 =()=>{
	return <>
	<Counter count={10}/>
		<Users users={['Bob','Chack','Den']}/>
	</>
}
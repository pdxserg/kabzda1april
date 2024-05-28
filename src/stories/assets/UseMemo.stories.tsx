import React, {useMemo, useState} from 'react';
import {array} from "prop-types";

export default  {title: 'useMemo'}

const SupUsers1 = (props: {users: Array<string> }) => {
	console.log("name")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users1= React.memo(SupUsers1)

type ArrCityType={
	city: CityType
}
type CityType={
	id:number, country: string, city: string, people: number
}


export const List = () => {
	console.log("help to react memo")
	//const [count, setCount] = useState(2)
	const [users, setUsers] = useState([

			{id:1, country: "Belarus", city: "Minsk", people: 100},
			{id:2, country: "Kazakhstan", city: "Astana", people: 100},
			{id:3, country: "Uzbek", city: "Bishkek", people: 100}
		]
	)
	const newArrayMemo=useMemo(()=>{
		const newArray = users.filter(u=> u.country.toLowerCase().indexOf("a") >-1)
		return newArray
	},[users])
	return <>
		<select >
			{newArrayMemo.map(c=>(<option value={c.id}>{c.city}</option> ))}
		</select>
	</>
}

//------------------------------

const SupUsers = (props: {users: Array<string> }) => {
	console.log("name")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users= React.memo(SupUsers)

export const Example1 = () => {
	console.log("help to react memo")
	const [count, setCount] = useState(2)
	const [users, setUsers] = useState(['Bob', 'Chack', 'Den'])
const newArrayMemo=useMemo(()=>{
	const newArray = users.filter(u=> u.toLowerCase().indexOf("a") >-1)
	return newArray
},[users])
	return <>
		<button onClick={() => setCount(count + 1)}>+</button>
		{count}
		<Users users={newArrayMemo}/>
	</>
}
 // -------------------------------------------------------------------
 export const UseMemoStories = () => {
	const[a,setA]=useState<number>(5)
	const[b,setB]=useState<number>(5)

	 let resultA =  1
	 let resultB =  1

	 resultA = useMemo(() => {
		 let tempResultA = resultA
		 for(let i=1; i<=a; i++){
			 console.log("A :"+i)
			 tempResultA = tempResultA * i
		 }
		 return tempResultA
	 }, [a]);

	 resultB  = useMemo(() => {
		 for (let i = 1; i <= b; i++) {
			 console.log("B :"+i)
			 // setTimeout(function() {
			 //  console.log("Item B: " + i);
			 // }, i * 1000);
			 resultB = resultB * i
		 }
		 return resultB
	 }, [b]);


	 return (
		<div>
			<input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
			<input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
			<div>Result for A:{resultA}</div>
			<div>Result for B:{resultB}</div>
		</div>
	);
};

//_____________________________________________________
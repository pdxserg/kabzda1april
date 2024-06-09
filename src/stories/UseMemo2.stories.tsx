import React, {useMemo, useState} from 'react';
import {array} from "prop-types";

export default {title: 'useMemo2'}



const SuperUser2 = (props : {b:Array<string> })=>{
	console.log("superuser")

	return(
		<div>
			<input list="ddd"/>
			<datalist id="ddd">
				{props.b.map(b => <option value={b}></option>)}
			</datalist>
			<button onClick={()=>{}}>+</button>
		</div>
	)
}
const User2= React.memo(SuperUser2)
export const example2=()=>{
	console.log("eee")
	const [a, setA] = useState(0)
	const [b, setB] = useState<Array<string>>(['ddad', 'eee', 'qqAq'])

	const newArr = useMemo(() => {
		const newArr = b.filter(b => b.toLowerCase().indexOf("a") > -1)
		return newArr
	}, [b])


	return <div>
		{a}
		<button onClick={() => setA(a + 1)}>+</button>
		<User2 b={newArr}/>
	</div>
}
//------------------------------------
const SupUsers1 = () => {
	console.log("numbers")
	const [a, setA]= useState(0)
	const handlrer=()=>{
		setA(a+1)
	}
	return <div>
		<input value={a} />
		<button onClick={handlrer}>+</button>
	</div>
}
const Users1 = React.memo(SupUsers1)

type ArrCityType = {
	city: CityType
}
type CityType = {
	id: number, country: string, city: string, people: number
}


export const List = () => {
	console.log("help to react memo")
	//const [count, setCount] = useState(2)
	const [users, setUsers] = useState([
		       {id: 1,
				country: {
					title: "Belarus",
					city: {
						name: "Minsk",
						people: 200}}},
		 {id: 2,
				country: {
					title: "Kazakhstan",
					city: {
						name: "Astana",
						people: 400}}},
		 {id: 3,
				country: {
					title: "Uzbek",
					city: {
						name: "Bishkek",
						people: 1000}}},
		]
	)
	const newArrayMemo = useMemo(() => {
		console.log("help to react memo")
		const newArray = users.filter(u => u.country.city.people > 399)
		return newArray
	}, [users])
	return <>
		<Users1/>
		<select>
			{newArrayMemo.map(c => (<option value={c.id}>{c.country.city.name}</option>))}
		</select>
	</>
}

//------------------------------

const SupUsers = (props: { users: Array<string> }) => {
	console.log("name")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users = React.memo(SupUsers)

export const Example1 = () => {
	console.log("help to react memo")
	const [count, setCount] = useState(2)
	const [users, setUsers] = useState(['Bob', 'Chack', 'Den'])
	// const newArrayMemo = useMemo(() => {
	 	const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
	// 	return newArray
	// }, [users])
	return <>
		<button onClick={() => setCount(count + 1)}>+</button>
		{count}
		<Users users={newArray}/>
	</>
}
// -------------------------------------------------------------------
export const UseMemo2Stories = () => {
	const [a, setA] = useState<number>(5)
	const [b, setB] = useState<number>(5)

	let resultA = 1
	let resultB = 1

	 resultA = useMemo(() => {
		let tempResultA = resultA
		for (let i = 1; i <= a; i++) {
			console.log("A :" + i)
			tempResultA = tempResultA * i
		}
	 	return tempResultA
	 }, [a]);

	 resultB = useMemo(() => {
		for (let i = 1; i <= b; i++) {
			console.log("B :" + i)
			// setTimeout(function() {
			//  console.log("Item B: " + i);
			// }, i * 1000);
			resultB = resultB * i
		}
	 	return resultB
	 }, [b]);


	return (
		<div>
			<input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
			<input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
			<div>Result for A:{resultA}</div>
			<div>Result for B:{resultB}</div>
		</div>
	);
};

//_____________________________________________________
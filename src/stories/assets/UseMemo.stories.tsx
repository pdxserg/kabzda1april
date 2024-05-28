import React, {useState} from 'react';

export default  {title: 'useMemo'}

 export const UseMemoStories = () => {
	const[a,setA]=useState<number>(5)
	const[b,setB]=useState<number>(5)

	 let resultA =  1
	 let resultB =  1

	 for(let i=1; i<=a; i++){
		 setTimeout(function() {
			 console.log("A: " + i);
		 }, i * 1000);
		 resultA = resultA * i
	 }
	 for (let i = 1; i <= b; i++) {
		 setTimeout(function() {
			 console.log("Item B: " + i);
		 }, i * 1000);
		 resultB = resultB * i
	 }

	 return (
		<div>
			<input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
			<input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
			<div>Result for A:{resultA}</div>
			<div>Result for B:{resultB}</div>
		</div>
	);
};


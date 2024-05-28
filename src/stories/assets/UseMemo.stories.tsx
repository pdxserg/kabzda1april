import React, {useMemo, useState} from 'react';

export default  {title: 'useMemo'}

 export const UseMemoStories = () => {
	const[a,setA]=useState<number>(5)
	const[b,setB]=useState<number>(5)

	 let resultA =  1
	 let resultB =  1

	 resultA = useMemo(() => {
		 for(let i=1; i<=a; i++){
			 console.log("A :"+i)
			 resultA = resultA * i
		 }
		 return resultA
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


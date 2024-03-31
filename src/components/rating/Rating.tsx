import React from "react";

export function Rating() {
	console.log("How many time rendered REITING")
	return (
		<>
			<Star/>
			<Star/>
			<Star/>
			<Star/>
			<Star/>
		</>

	)
}

function Star() {
	console.log("How many time rendered STAR")
	return (
		<div>
			<div>star</div>
		</div>
	)
}
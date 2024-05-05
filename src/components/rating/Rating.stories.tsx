
import {action} from '@storybook/addon-actions'
import React, {useState} from "react";
import {RaitinNumber, Rating} from "./Rating";


export default  {
	title: 'Ratin story!!!',
	component: Rating,
};





export const EmptyRating = ()=> <Rating value={0} setRait={x=>x}/>
export const Rating1 = ()=> <Rating value={1} setRait={x=>x}/>
export const Rating2 = ()=> <Rating value={2} setRait={x=>x}/>
export const Rating3 = ()=> <Rating value={3} setRait={x=>x}/>
export const Rating4 = ()=> <Rating value={4} setRait={x=>x}/>
export const Rating5 = ()=> <Rating value={5} setRait={x=>x}/>
export const ChangeRating = ()=>{
	const [rating,setRaiting]=useState<RaitinNumber>(2)
	return<Rating value={rating} setRait={setRaiting}/>
}

import {action} from '@storybook/addon-actions'
import React, {useState} from "react";
import {OnOff} from "./OnOff";


export default {
	title: 'OnOff story!!!',
	component: OnOff,
};
export const onStyle = () => <OnOff on={true} switchHandler={action('clicked') }/>
export const offStyleStyle = () => <OnOff on={false} switchHandler={action('clicked') }/>


// <div style={onStyle} onClick={() => props.switchHandler(true)}>on</div>
// <div style={offStyle} onClick={() => props.switchHandler(false)}>off</div>
// <div style={indicatorStyle}></div>

// export const EmptyRating = () => <Rating value={0} setRait={x => x}/>
// export const Rating1 = () => <Rating value={1} setRait={x => x}/>
// export const Rating2 = () => <Rating value={2} setRait={x => x}/>
// export const Rating3 = () => <Rating value={3} setRait={x => x}/>
// export const Rating4 = () => <Rating value={4} setRait={x => x}/>
// export const Rating5 = () => <Rating value={5} setRait={x => x}/>
// export const ChangeRating = () => {
// 	const [rating, setRaiting] = useState<RaitinNumber>(2)
// 	return <Rating value={rating} setRait={setRaiting}/>
// }


export const switching = () => {
	const [value, setValue] = useState(true)
	return <OnOff on={value} switchHandler={setValue  }/>

}
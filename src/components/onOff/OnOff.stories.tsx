import {action} from '@storybook/addon-actions'
import React, {useState} from "react";
import {OnOff} from "./OnOff";


export default {
	title: 'OnOff story!!!',
	component: OnOff,
};
export const onStyle = () => <OnOff on={true} switchHandler={action('clicked') }/>
export const offStyleStyle = () => <OnOff on={false} switchHandler={action('clicked') }/>



export const switching = () => {
	const [value, setValue] = useState(true)
	return <OnOff on={value} switchHandler={setValue  }/>

}
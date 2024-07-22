
import {action} from '@storybook/addon-actions'

import React, {useState} from "react";
import {Clock} from "./Clock";



export default  {
	title:'Clock',
	component: Clock,
};
export  const Analog =()=>{

	return <Clock frame={false}/>
}
export  const Digital =()=>{

	return <Clock frame={true}/>
}

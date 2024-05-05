
import {action} from '@storybook/addon-actions'
import { Accordion } from './Accordion';
import React, {useState} from "react";


 export default  {
	component: Accordion,
};




const onChangeHandler = action('onchange')
export  const CollapsedAccordion =()=>{
	return <Accordion titleValue={" Collapsed Accordion"}
	                  collapsed={true}
	                  accordionChangeHandler={onChangeHandler}
	/>
}
export  const OpenedAccordion =()=>{
	return <Accordion titleValue={"Opened Accordion"}
	                  collapsed={false}
	                  accordionChangeHandler={()=>{}}
	/>
}
export  const  Accordion1 =()=>{
	const [collapsed, setCollapsed] = useState(false)
	return <Accordion titleValue={"Accordion"}
	                  collapsed={collapsed}
	                  accordionChangeHandler={()=> setCollapsed(!collapsed)}
	/>
}
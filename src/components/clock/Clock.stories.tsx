
import {action} from '@storybook/addon-actions'

import React, {useState} from "react";
import {Clock} from "../../stories/useEffect.stories";


export default  {
	title:'Clock',
	component: Clock,
};
export  const BaseExample =()=>{

	return <Clock
	/>
}

import {throws} from "node:assert";

type ActionType = {
	type: string
}
 export type  StateType={
	collapsed: boolean
}

export const TOGGLE_CONSTANT="TOGGLE_CONSTANT"

export const reducer = (state: StateType, action: ActionType):StateType => {
	switch (action.type){
		case  TOGGLE_CONSTANT:
			return 	{...state, collapsed:!state.collapsed}

		default:
		//	return state
			 throw new Error('Bad action type')

	}



}
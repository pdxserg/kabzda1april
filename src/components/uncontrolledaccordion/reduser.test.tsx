import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

export const ser=()=>{}
 test('reducer should be change value to opposite', ()=>{
	//data
const state: StateType ={
	collapsed: false
}
	//action
 const newState = reducer(state, {type: TOGGLE_CONSTANT})
	//expect

	expect(newState.collapsed).toBe(true)


})




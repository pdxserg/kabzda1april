import React, {useRef, useState} from 'react'
import {OnOff} from "../components/onOff/OnOff";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;



export default {
  title:'input',
  //component:OnOff,
}

export const UncontrolledInput =()=> <input />
export const ControlledInput =()=> <input  value={'some wolrds'}/>


export const GetValueUncontrolledInputByButtonPres =()=> {
  const[value, setValue]=useState("")
  const inputRef= useRef<HTMLInputElement>(null)

  const save =()=>{
    const el =inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value:{value}</>
}


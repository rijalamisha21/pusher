import React from 'react'

interface InputsProps{
    name:string,
    type:string,
    label:any,
    placeholder:any,
    value:any
}
const Inputs:React.FC<InputsProps> = ({name, label,type,value,placeholder}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} value={value} placeholder={placeholder}/>
    </div>
  )
}

export default Inputs

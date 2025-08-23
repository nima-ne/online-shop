import React, { ComponentPropsWithoutRef } from 'react'

function Input({type , className , onChange , placeholder }:ComponentPropsWithoutRef<"input">) {
  return (
    <input className={className} type={type} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input
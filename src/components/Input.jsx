import { forwardRef } from "react";

export const Input = forwardRef(({label, name, onChange, type="text", className=""}, ref) => {
  return (
    <div className={`${className} flex flex-col`}>
      <label>{label}</label>
      <input type={type} ref={ref} name={name} onChange={onChange} className=""/>
    </div>
  )
});
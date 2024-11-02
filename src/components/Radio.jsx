import { forwardRef } from "react";

export const Radio = forwardRef(({name, value, label, onChange, className}, ref) => {
  return (
    <div className={`border h-8 ${className} rounded-md flex items-center p-4 gap-2 border-grey-500 h-10`}>
      <input type="radio" name={name} value={value} ref={ref}/>
      <label htmlFor={name}>{label}</label>
    </div>
  )
});
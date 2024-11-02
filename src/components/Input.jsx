import { forwardRef } from "react";

export const Input = forwardRef(({label, name, onChange, type="text", className=""}, ref) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label>{label}</label>
      <input type={type} ref={ref} name={name} onChange={onChange} className="border rounded-md h-10 border-grey-500 focus:border-green-600 focus:border-2 focus:!outline-none"/>
    </div>
  )
});
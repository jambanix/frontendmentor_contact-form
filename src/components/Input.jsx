import { forwardRef } from "react";
import { Label } from "./Label";

export const Input = forwardRef(({label, name, onChange, type="text", className=""}, ref) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label className="" htmlFor={name}>{label}</Label>
      <input type={type} ref={ref} name={name} onChange={onChange} className="border rounded-md h-12 border-grey-500 focus:border-green-600 focus:border-2 focus:!outline-none py-2 px-4 hover:border-2"/>
    </div>
  )
});
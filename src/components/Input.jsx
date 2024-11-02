import { forwardRef } from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

export const Input = forwardRef(({label, name, onChange, error, type="text", className=""}, ref) => {

  const border = error ? "border-red" : "border-grey-500"

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label className="" htmlFor={name}>{label}</Label>
      <input type={type} ref={ref} name={name} onChange={onChange} className={`${border} border rounded-md h-12 focus:border-green-600 focus:border-2 focus:!outline-none py-2 px-4 hover:border-2`}/>
      <ErrorMessage message={error?.message}/>
    </div>
  )
});
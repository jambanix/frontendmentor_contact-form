import { forwardRef } from "react";
import { Label } from "./Label";

export const TextArea = forwardRef(({name, label, onChange, className}, ref) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <Label htmlFor={name}>{label}</Label>
      <textarea name={name} ref={ref} id={name} onChange={onChange} className="border border-grey-500 focus:border-2 focus:border-green-600 focus:!outline-none h-32 rounded-md"></textarea>
    </div>
  )
});
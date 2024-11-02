import { forwardRef } from "react";
import { Label } from "../components/Label"
import { ErrorMessage } from "./ErrorMessage";

export const Checkbox = forwardRef(({name, onSelect, label, error}, ref) => {

  return (
    <div className="flex flex-col gap-2">
      <div onClick={onSelect} className="flex gap-4 items-center">
        <input type="checkbox" name={name} id={name} ref={ref} className="w-5 h-5 accent-green-600"/>
        <Label htmlfor={name}>{label}</Label>
      </div>
      <ErrorMessage message={error?.message} />
    </div>
    
  )
});
import { forwardRef } from "react";
import { Label } from "../components/Label"

export const Checkbox = forwardRef(({name, onSelect, label}, ref) => {
  return (
    <div onClick={onSelect} className="flex gap-4 items-center">
      <input type="checkbox" name={name} id={name} ref={ref} className="w-5 h-5 accent-green-600"/>
      <Label htmlfor={name}>{label}</Label>
    </div>
  )
});
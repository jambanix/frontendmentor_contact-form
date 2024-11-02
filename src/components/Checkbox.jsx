import { forwardRef } from "react";
import { Label } from "../components/Label"

export const Checkbox = forwardRef(({name, onChange, label}, ref) => {
  return (
    <div className="flex gap-4 items-center">
      <input type="checkbox" name={name} id={name} onSelect={onChange} ref={ref} className="w-5 h-5"/>
      <Label htmlfor={name}>{label}</Label>
    </div>
  )
});
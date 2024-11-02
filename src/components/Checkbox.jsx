import { forwardRef } from "react";

export const Checkbox = forwardRef(({name, onChange, label}, ref) => {
  return (
    <div className="flex gap-4">
      <input type="checkbox" name={name} id={name} onSelect={onChange} ref={ref}/>
      <label htmlFor={name}>{label}</label>
    </div>
  )
});
import { forwardRef } from "react";

export const Checkbox = forwardRef(({name, onChange, label}, ref) => {
  return (
    <input type="checkbox" name={name} id={name} onSelect={onChange} ref={ref} value={label} />
  )
});
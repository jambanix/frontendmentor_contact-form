import { forwardRef } from "react";

export const Radio = forwardRef(({name, label, onChange}, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="radio" name={name}/>
    </div>
  )
});
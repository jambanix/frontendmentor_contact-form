import { forwardRef } from "react";

export const TextArea = forwardRef(({name, label, onChange, className}, ref) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={name} ref={ref}>{label}</label>
      <textarea name={name} id={name} onChange={onChange}></textarea>
    </div>
  )
});
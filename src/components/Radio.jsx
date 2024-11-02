import { forwardRef } from "react";

export const Radio = forwardRef(({name, value, label, onSelect, className, currentOption}, ref) => {

  const isSelected = currentOption === value;
  console.log(isSelected);

  return (
    <div onClick={() => onSelect(name, value)} className={`border h-8 ${className} rounded-md flex items-center p-4 gap-2 border-grey-500 h-12 hover:border-2`}>
      <input type="radio" name={name} value={value} ref={ref}/>
      <label className="text-lg text-grey-900" htmlFor={name}>{label}</label>
    </div>
  )
});
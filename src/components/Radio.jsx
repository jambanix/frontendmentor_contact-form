import { forwardRef } from "react";

export const Radio = forwardRef(
  ({ name, value, label, onSelect, className, currentOption }, ref) => {
    const isSelected = currentOption === value;
    const containerDynamicStyle = isSelected
      ? "border-green-600 border-2 bg-green-200"
      : "border-grey-500 border";

    return (
      <div
        onClick={() => onSelect(name, value)}
        className={`h-12 ${className} rounded-md flex items-center p-4 gap-2 h-12 hover:border-2 ${containerDynamicStyle} cursor-pointer`}
      >
        <input
          className="accent-green-600"
          type="radio"
          name={name}
          value={value}
          ref={ref}
        />
        <label className="text-lg text-grey-900" htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
);

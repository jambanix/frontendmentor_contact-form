import { forwardRef } from "react";
import { Label } from "./Label";
import { ErrorMessage } from "./ErrorMessage";

export const TextArea = forwardRef(
  ({ name, label, onChange, className, error }, ref) => {
    const border = error ? "border-red" : "border-grey-500";

    return (
      <div className={`${className} flex flex-col gap-2`}>
        <Label htmlFor={name}>{label}</Label>
        <textarea
          name={name}
          ref={ref}
          id={name}
          onChange={onChange}
          className={`text-grey-900 border focus:border-2 focus:border-green-600 focus:!outline-none h-32 rounded-md py-2 px-4 hover:border-2 resize-none ${border}`}
        ></textarea>
        <ErrorMessage message={error?.message} />
      </div>
    );
  }
);

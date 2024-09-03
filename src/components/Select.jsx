import React, { forwardRef, useId } from "react";
import service from "../services/services" 

const Select = forwardRef(({ options, label, classname, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {/* htmlFor attribute is used to get the HTML for the given HTML elements. Simply put it is the for tag of HTML.*/}
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg
        bg-white text-black outline-none
        focus:bg-gray-50 duration-200 border
        border-gray-200 w-full ${classname}`}
      >
        {options.map((option) => {
          <option value={option} key={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
});

export default Select;

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';

interface ICheckbox {
  value?: string;
  checked?: boolean;
  name?: string;
  onChange?: (value: any) => void;
  children?: React.ReactNode;
  className?: string;
}

const Checkbox = ({ value, checked, name, children, className = '', onChange }: ICheckbox) => {
  const handleChange = () => {
    if (onChange) onChange(!checked);
  };
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={value}
          type="checkbox"
          aria-describedby={`${value}`}
          name={name}
          value={value}
          defaultChecked={checked}
          checked={checked}
          className="relative h-6 w-6 text-primary-600 border-dark-300 rounded-4 checked:bg-primary-1000 checked:border-primary-1000 checked:focus:bg-primary-1000 checked:hover:bg-primary-1000 focus:ring-0 focus:ring-offset-0 cursor-pointer"
          onChange={handleChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={value} className="text-sm font-normal leading-[22px] text-dark-1000">
          {children}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { InputSize } from '@/types/size';

export interface ICheckbox {
  value?: string;
  checked?: boolean;
  name?: string;
  onChange: (value: any) => void;
  children?: React.ReactNode;
  className: string;
  size: InputSize;
}

const Checkbox = ({
  value,
  checked,
  name,
  children,
  className = '',
  onChange,
  size = 'large',
}: ICheckbox) => {
  const isSmall = size === 'small';
  const sizeClass = isSmall ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = isSmall ? 'text-xs' : 'text-sm';
  return (
    <section className={`flex items-center ${className}`}>
      <section className="flex items-center h-5">
        <input
          id={value}
          type="checkbox"
          aria-describedby={`${value}`}
          name={name}
          value={value}
          defaultChecked={checked}
          checked={checked}
          className={`${sizeClass} relative text-primary-600 border-dark-300 rounded-4 checked:bg-primary-1000 checked:border-primary-1000 checked:focus:bg-primary-1000 checked:hover:bg-primary-1000 focus:ring-0 focus:ring-offset-0 cursor-pointer`}
          onChange={() => onChange?.(!checked)}
        />
      </section>
      <section className="ml-3 text-sm">
        <label
          htmlFor={value}
          className={`${textSize} font-normal leading-[22px] text-dark-1000`}
        >
          {children}
        </label>
      </section>
    </section>
  );
};

export default Checkbox;

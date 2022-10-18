/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import './radio.css';

interface IRadio {
  value?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  checked?: boolean;
}

const Radio = ({
  value,
  children,
  onChange,
  checked = false,
  ...others
}: IRadio) => (
  <section className="flex items-center">
    <input
      id={value}
      type="radio"
      value={value}
      onChange={() => onChange?.(value)}
      checked={checked}
      className="input-radio border border-dark-300 text-primary-600 checked:bg-primary-1000 checked:border-transparent  focus:ring-0"
      {...others}
    />
    <label
      htmlFor={value}
      className="block ml-3 text-sm font-normal leading-[22px] text-dark-1000"
    >
      {children}
    </label>
  </section>
);

export default Radio;

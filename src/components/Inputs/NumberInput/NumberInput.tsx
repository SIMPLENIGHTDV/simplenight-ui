/* eslint-disable react/require-default-props */
import React from 'react';

export interface NumberInputProps {
  name?: string;
  value: number;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({
  name = '',
  value,
  defaultValue = 0,
  minValue = 0,
  maxValue,
  disabled = false,
  onChange,
}: NumberInputProps) => (
  <input
    id={name}
    name={name}
    type="number"
    className="block text-center border-gray-300 rounded w-11 h-11 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    disabled={disabled}
    value={value}
    defaultValue={defaultValue}
    onChange={onChange}
    min={minValue}
    max={maxValue}
  />
);

export default NumberInput;

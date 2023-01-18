/* eslint-disable react/require-default-props */
import React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

const Label = ({ htmlFor = '', children }: LabelProps) => (
  <label
    className="block text-sm font-semibold text-dark-800"
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

export default Label;

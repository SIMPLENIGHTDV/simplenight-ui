import React from 'react';
import { GeneralProps } from '../types';

type TextAreaProps = GeneralProps;

interface ColorsMap {
  [key: string]: string;
}

const TextArea = (
  {
    name = '',
    size = 'large',
    placeholder,
    state = 'idle',
    value,
    onChange,
  }: TextAreaProps,
) => {
  const height = size === 'small' ? 'h-20' : 'h-24';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';
  const idleBorderColor = value ? 'border-dark-400' : 'border-dark-300';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${idleBorderColor} focus:ring-0 focus:border-primary-1000`,
    error:
      'text-dark-1000 border-error-1000 focus:ring-0 focus:border-error-1000',
    success:
      'text-dark-1000 border-green-1000 focus:ring-0 focus:border-green-1000',
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
  };
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`rounded w-full resize-none ${height} ${colors[state]} ${textSize} `}
    />
  );
};

export default TextArea;

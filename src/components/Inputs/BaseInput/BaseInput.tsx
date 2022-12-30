import React from 'react';
import { GeneralProps } from '../types';

interface BaseInputSpecificProps {
  type: 'text';
}

type BaseInputProps = BaseInputSpecificProps & GeneralProps;

interface ColorsMap {
  [key: string]: string;
}

const BaseInput = ({
  name = '',
  type,
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
}: BaseInputProps) => {
  const height = size === 'small' ? 'h-8' : 'h-11';
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

  const isDisabled = state === 'disabled';

  return (
    <input
      id={name}
      type={type}
      placeholder={placeholder}
      className={`rounded w-full ${height} ${colors[state]} ${textSize}`}
      disabled={isDisabled}
      value={value}
      onChange={onChange}
    />
  );
};

export default BaseInput;

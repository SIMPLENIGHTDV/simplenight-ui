import React from 'react';
import { ColorsMap, GeneralProps } from '../types';

interface BaseInputSpecificProps {
  type: 'text' | 'password';
  rightIcon?: boolean;
  leftIcon?: boolean;
}

type BaseInputProps = BaseInputSpecificProps & GeneralProps;

const defaultProps = {
  rightIcon: false,
  leftIcon: false,
};

const BaseInput = ({
  name = '',
  type,
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
  rightIcon = false,
  leftIcon = false,
}: BaseInputProps) => {
  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';
  const rightPadding = rightIcon ? 'pr-11' : 'pr-3';
  const leftPadding = leftIcon ? 'pl-10' : 'pl-3';

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
      name={name}
      type={type}
      placeholder={placeholder}
      className={`rounded w-full ${height} ${leftPadding} ${rightPadding} ${colors[state]} ${textSize}`}
      disabled={isDisabled}
      value={value}
      onChange={onChange}
    />
  );
};

BaseInput.defaultProps = defaultProps;

export default BaseInput;

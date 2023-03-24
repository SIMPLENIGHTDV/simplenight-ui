import React from 'react';
import { ColorsMap, GeneralProps } from '@/components/Inputs/types';

export interface BaseInputSpecificProps {
  rightPadding?: string;
  leftPadding?: string;
  innerRef: any;
}

type BaseInputProps = BaseInputSpecificProps & GeneralProps;

const defaultProps = {
  rightPadding: 'pr-3',
  leftPadding: 'pr-3',
};

const BaseInput = ({
  name = '',
  inputSize = 'large',
  placeholder,
  state = 'idle',
  value,
  rightPadding = 'pr-3',
  leftPadding = 'pr-3',
  innerRef,
  ...rest
}: BaseInputProps) => {
  const height = inputSize === 'small' ? 'h-8' : 'h-11';
  const textSize = inputSize === 'small' ? 'text-sm' : 'text-base';

  const idleBorderColor = value ? 'border-dark-400' : 'border-dark-300';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${idleBorderColor} focus:border-primary-1000`,
    error: 'text-dark-1000 border-error-1000 focus:border-error-1000',
    success: 'text-dark-1000 border-green-1000 focus:border-green-1000',
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
  };

  const isDisabled = state === 'disabled';

  return (
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      className={`rounded w-full border focus:ring-0 focus:outline-0 pl-3 ${height} ${leftPadding} ${rightPadding} ${colors[state]} ${textSize}`}
      disabled={isDisabled}
      value={value}
      ref={innerRef}
      {...rest}
    />
  );
};
BaseInput.defaultProps = defaultProps;

export default BaseInput;

/* eslint-disable react/default-props-match-prop-types */
import React from 'react';

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  inputSize?: 'large' | 'small';
  rows?: number;
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
}

export interface ColorsMap {
  [key: string]: string;
}

const defaultProps = {
  name: '',
  inputSize: 'large',
  rows: 1,
  state: 'idle',
  placeholder: '',
};

const TextArea = ({
  name = '',
  inputSize = 'large',
  rows = 1,
  placeholder = '',
  state = 'idle',
  value,
  ...rest
}: TextAreaProps) => {
  const textSize = inputSize === 'small' ? 'text-sm' : 'text-base';
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
    <textarea
      rows={rows}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      className={`rounded w-full resize-none  ${colors[state]} ${textSize} `}
      disabled={isDisabled}
      {...rest}
    />
  );
};

TextArea.defaultProps = defaultProps;

export default TextArea;

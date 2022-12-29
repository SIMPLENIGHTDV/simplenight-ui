import React from 'react';

interface BaseInputProps {
  type: 'text';
  size?: 'large' | 'small';
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
}

interface ColorsMap {
  [key: string]: string;
}

const defaultProps = {
  size: 'large',
  state: 'idle',
  placeholder: 'Placeholder',
};

const BaseInput = ({
  type,
  size = 'large',
  placeholder,
  state = 'idle',
}: BaseInputProps) => {
  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';

  const colors: ColorsMap = {
    idle: 'text-dark-1000 border-dark-300 focus:ring-0 focus:border-primary-1000',
    error:
      'text-dark-1000 border-error-1000 focus:ring-0 focus:border-error-1000',
    success:
      'text-dark-1000 border-green-1000 focus:ring-0 focus:border-green-1000',
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
  };

  const isDisabled = state === 'disabled';

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded w-full ${height} ${colors[state]} ${textSize}`}
      disabled={isDisabled}
    />
  );
};

BaseInput.defaultProps = defaultProps;

export default BaseInput;

import React from 'react';

type TextAreaProps = {
  name?: string;
  size?: 'large' | 'small';
  rows?: number;
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
  value: string;
  onChange: (
    // eslint-disable-next-line no-unused-vars
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

export interface ColorsMap {
  [key: string]: string;
}

const defaultProps = {
  name: '',
  size: 'large',
  rows: 1,
  state: 'idle',
  placeholder: '',
};

const TextArea = ({
  name = '',
  size = 'large',
  rows,
  placeholder,
  state = 'idle',
  value,
  onChange,
}: TextAreaProps) => {
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
    <textarea
      rows={rows}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`rounded w-full resize-none  ${colors[state]} ${textSize} `}
      disabled={isDisabled}
    />
  );
};

TextArea.defaultProps = defaultProps;

export default TextArea;

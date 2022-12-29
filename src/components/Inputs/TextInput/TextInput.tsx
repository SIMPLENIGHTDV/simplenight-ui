import React from 'react';
import BaseInput from '../BaseInput';

interface TextInputProps {
  size?: 'large' | 'small';
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps = {
  size: 'large',
  placeholder: 'Placeholder',
  state: 'idle',
};

const TextInput = ({
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
}: TextInputProps) => (
  <BaseInput
    type="text"
    size={size}
    placeholder={placeholder}
    state={state}
    value={value}
    onChange={onChange}
  />
);

TextInput.defaultProps = defaultProps;

export default TextInput;

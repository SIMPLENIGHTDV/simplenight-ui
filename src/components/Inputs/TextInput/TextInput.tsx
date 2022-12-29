import React from 'react';
import BaseInput from '../BaseInput';

interface TextInputProps {
  size?: 'large' | 'small';
  placeholder?: string;
  state?: 'idle' | 'disabled' | 'error' | 'success';
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
}: TextInputProps) => (
  <BaseInput type="text" size={size} placeholder={placeholder} state={state} />
);

TextInput.defaultProps = defaultProps;

export default TextInput;

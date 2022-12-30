import React from 'react';
import BaseInput from '../BaseInput';
import { GeneralProps } from '../types';

type TextInputProps = GeneralProps;

const TextInput = ({
  name = '',
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
}: TextInputProps) => (
  <BaseInput
    name={name}
    type="text"
    size={size}
    placeholder={placeholder}
    state={state}
    value={value}
    onChange={onChange}
  />
);

export default TextInput;

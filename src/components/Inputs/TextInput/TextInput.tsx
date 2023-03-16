import React from 'react';
import BaseInput from '@/components/Inputs/BaseInput';
import { GeneralProps } from '@/components/Inputs/types';

type TextInputProps = GeneralProps;

const TextInput = ({
  name = '',
  inputSize = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
}: TextInputProps) => (
  <BaseInput
    name={name}
    type="text"
    inputSize={inputSize}
    placeholder={placeholder}
    state={state}
    value={value}
    onChange={onChange}
  />
);

export default TextInput;

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
  ...rest
}: TextInputProps) => (
  <BaseInput
    name={name}
    inputType="text"
    inputSize={inputSize}
    placeholder={placeholder}
    state={state}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default TextInput;

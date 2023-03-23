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
  ...rest
}: TextInputProps) => (
  <BaseInput
    name={name}
    inputSize={inputSize}
    placeholder={placeholder}
    state={state}
    value={value}
    {...rest}
  />
);

export default TextInput;

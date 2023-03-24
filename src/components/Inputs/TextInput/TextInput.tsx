import React, { ForwardedRef, forwardRef } from 'react';
import BaseInput from '@/components/Inputs/BaseInput';
import { GeneralProps } from '@/components/Inputs/types';

type TextInputProps = GeneralProps;

const TextInput = forwardRef(
  (
    {
      name = '',
      inputSize = 'large',
      placeholder,
      state = 'idle',
      value,
      ...rest
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => (
    <BaseInput
      name={name}
      inputSize={inputSize}
      placeholder={placeholder}
      state={state}
      value={value}
      innerRef={ref}
      {...rest}
    />
  ),
);

export default TextInput;

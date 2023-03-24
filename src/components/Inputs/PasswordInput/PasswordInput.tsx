import React, { useState, ForwardedRef, forwardRef } from 'react';
import BaseInput from '../BaseInput';
import { GeneralProps } from '../types';
import Eye from '@/icons/regular/Eye';
import EyeCross from '@/icons/regular/EyeCross';
import IconWrapper from '@/components/IconWrapper';

type PasswordInputProps = GeneralProps;

const PasswordInput = forwardRef(
  (
    {
      inputSize = 'large',
      placeholder,
      state = 'idle',
      value,
      onChange,
      ...rest
    }: PasswordInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
      setShow(!show);
    };

    const iconSize = inputSize === 'large' ? 20 : 16;

    return (
      <section className="relative flex items-center">
        <BaseInput
          inputSize={inputSize}
          placeholder={placeholder}
          state={state}
          value={value}
          rightPadding="pr-12"
          ref={ref}
          {...rest}
        />
        <button className="absolute right-4" onClick={handleShow} type="button">
          <IconWrapper size={iconSize}>
            {!show && <Eye className=" text-dark-1000" />}
            {show && <EyeCross className=" text-dark-1000" />}
          </IconWrapper>
        </button>
      </section>
    );
  },
);

export default PasswordInput;

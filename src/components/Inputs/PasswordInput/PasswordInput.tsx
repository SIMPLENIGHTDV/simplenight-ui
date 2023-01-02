import React, { useState } from 'react';
import BaseInput from '../BaseInput';
import { GeneralProps } from '../types';
import Eye from '../../../icons/regular/Eye';

type PasswordInputProps = GeneralProps;

const PasswordInput = ({
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
}: PasswordInputProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const type = show ? 'text' : 'password';

  const iconSize = size === 'large' ? 'w-5 h-5' : 'w-3.5 h-3.5';

  return (
    <section className="relative flex items-center">
      <BaseInput
        type={type}
        size={size}
        placeholder={placeholder}
        state={state}
        value={value}
        onChange={onChange}
        rightIcon
      />
      <button className="absolute right-4" onClick={handleShow} type="button">
        <Eye className={`${iconSize} text-dark-1000`} />
      </button>
    </section>
  );
};

export default PasswordInput;
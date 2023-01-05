/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import './radio.css';
import classNames from 'classnames';

interface IRadio {
  value?: string;
  children?: React.ReactNode;
  onChange?: (value: any) => void;
  checked?: boolean;
  size?: 'small' | 'large';
}

const Radio = ({
  value,
  onChange,
  checked,
  size = 'large',
  children,
  ...others
}: IRadio) => {
  const isSmall = size === 'small';
  const sizeClass = isSmall ? 'w-5 h-5' : 'h-6 w-6';
  const checkSize = isSmall ? 'w-[0.7rem] h-[0.7rem]' : 'w-[0.8rem] h-[0.8rem]';
  const textClass = isSmall ? 'text-xs' : 'text-sm';
  return (
    <label htmlFor={value} className="radio-label text-dark-800">
      <input
        {...others}
        id={value}
        className={`radio-input ${sizeClass}`}
        type="radio"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span
        className={classNames(`custom-radio ${sizeClass}`, {
          'border-primary-1000': checked,
          'border-dark-300': !checked,
        })}
      >
        <span className={`custom-radio__check bg-primary-1000 ${checkSize}`} />
      </span>
      <span className={`radio-content ${textClass}`}>{children}</span>
    </label>
  );
};

export default Radio;

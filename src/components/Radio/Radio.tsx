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
}

const Radio = ({ value, onChange, checked, children, ...others }: IRadio) => (
  <label htmlFor={value} className="radio-label text-dark-800 text-sm">
    <input
      {...others}
      id={value}
      className="radio-input"
      type="radio"
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <span
      className={classNames('custom-radio', {
        'border-primary-1000': checked,
        'border-dark-300': !checked,
      })}
    >
      <span className="custom-radio__check bg-primary-1000" />
    </span>
    <span className="radio-content">{children}</span>
  </label>
);

export default Radio;

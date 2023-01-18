/* eslint-disable operator-linebreak */
import React, { ReactNode } from 'react';
import { ButtonInputProps, ColorsMap } from '@/components/Inputs/types';

export interface BaseButtonInputProps extends ButtonInputProps {
  children: ReactNode;
  hasValue: boolean;
}

const BaseButtonInput = ({
  name = '',
  size = 'large',
  state = 'idle',
  children,
  hasValue,
  isOpen = false,
  onClick,
}: BaseButtonInputProps) => {
  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-xs' : 'text-sm';

  const idleBorderColorNoOpen = hasValue
    ? 'border-dark-400'
    : 'border-dark-300';
  const idleBorderColor = isOpen
    ? 'border-primary-1000'
    : idleBorderColorNoOpen;

  const colors: ColorsMap = {
    idle: `text-dark-1000 ${idleBorderColor}`,
    error: 'text-dark-1000 border-error-1000',
    success: 'text-dark-1000 border-green-1000',
    disabled: 'text-dark-600 bg-dark-200 border-dark-300',
  };

  const pointer =
    state === 'disabled' ? 'cursor-not-allowed' : 'cursor-pointer';

  const isDisabled = state === 'disabled';

  return (
    <button
      name={name}
      className={`rounded px-3 text-left border w-full ${height} ${textSize} ${pointer} ${colors[state]}`}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButtonInput;

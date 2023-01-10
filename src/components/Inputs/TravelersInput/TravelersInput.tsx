import React from 'react';
import { ColorsMap } from '../types';
import BaseButtonInput from '../BaseButtonInput';
import { MultiplePersons } from '../../../icons';
import { TravelersInputProps } from './TravelersInputTypes';

const TravelersInput = ({
  size = 'large',
  placeholder = '',
  state = 'idle',
  value,
  onClick,
  isOpen = false,
}: TravelersInputProps) => {
  const hasValue = value !== '';

  const textSize = size === 'small' ? 'text-xs' : 'text-sm';
  const textColor = state === 'disabled' ? 'text-dark-600' : 'text-dark-1000';

  const iconSize = size === 'large' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const idleColor = isOpen ? 'text-dark-1000' : 'text-dark-700';
  const colors: ColorsMap = {
    idle: `${idleColor}`,
    error: 'text-error-1000',
    success: 'text-green-1000',
    disabled: 'text-dark-700',
  };

  return (
    <BaseButtonInput
      size={size}
      state={state}
      isOpen={isOpen}
      hasValue={hasValue}
      onClick={onClick}
    >
      <section className={`flex items-center gap-2 ${textSize}`}>
        <MultiplePersons className={`${iconSize} ${colors[state]}`} />
        {!hasValue && <div className="text-dark-600">{placeholder}</div>}
        <div className={`${textColor}`}>{value}</div>
      </section>
    </BaseButtonInput>
  );
};

TravelersInput.defaultProps = { placeholder: '' };

export default TravelersInput;

import React from 'react';
import { ColorsMap } from '@/components/Inputs/types';
import BaseButtonInput from '@/components/Inputs/BaseButtonInput';
import { MultiplePersons } from '@/icons';
import { TravelersInputProps } from './TravelersInputTypes';
import IconWrapper from '@/components/IconWrapper';

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

  const iconSize = size === 'large' ? 20 : 16;
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
        <IconWrapper size={iconSize}>
          <MultiplePersons className={` ${colors[state]}`} />
        </IconWrapper>
        {!hasValue && <div className="text-dark-600">{placeholder}</div>}
        <div className={`${textColor}`}>{value}</div>
      </section>
    </BaseButtonInput>
  );
};

TravelersInput.defaultProps = { placeholder: '' };

export default TravelersInput;

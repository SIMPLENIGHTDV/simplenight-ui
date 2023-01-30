import React from 'react';
import Select from '@/components/Inputs/Select';
import { ColorsMap, SelectProps } from '@/components/Inputs/types';
import Clock from '@/icons/regular/Clock';
import IconWrapper from '@/components/IconWrapper';

type TimeInputProps = Omit<SelectProps, 'searchable'>;

const TimeInput = ({
  options,
  defaultValue,
  size = 'large',
  state = 'idle',
  placeholder,
  onChange,
}: TimeInputProps) => {
  const iconSize = size === 'large' ? 20 : 16;
  const iconPosition = size === 'large' ? 'top-3' : 'top-[9px]';
  const leftPadding = size === 'large' ? 'pl-8' : 'pl-7';

  const colors: ColorsMap = {
    idle: 'text-dark-700',
    error: 'text-error-1000',
    success: 'text-green-1000',
    disabled: 'text-dark-700',
  };

  return (
    <section className="relative">
      <div className={`absolute ${iconPosition} left-3.5`}>
        <IconWrapper size={iconSize}>
          <Clock className={` ${colors[state]}`} />
        </IconWrapper>
      </div>
      <Select
        options={options}
        defaultValue={defaultValue}
        size={size}
        state={state}
        placeholder={placeholder}
        onChange={onChange}
        leftPadding={leftPadding}
        hideArrow
      />
    </section>
  );
};

export default TimeInput;

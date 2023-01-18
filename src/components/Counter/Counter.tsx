/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import MinusIcon from '@/icons/regular/MinusIcon';
import DualButton from '@/components/DualButton';
import NumberInput from '@/components/Inputs/NumberInput';
import PlusIcon from '@/icons/regular/PlusIcon';

export interface CounterProps {
  value: number;
  setValue: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}

const Counter = ({ value, setValue, minValue = 0, maxValue }: CounterProps) => {
  const handleRightClick = () => {
    if (maxValue) {
      setValue(value < maxValue ? value + 1 : maxValue);
    } else {
      setValue(value + 1);
    }
  };

  const handleLeftClick = () => {
    const positiveValue = value > minValue ? value - 1 : minValue;
    setValue(positiveValue);
  };

  return (
    <section className="flex gap-4">
      <NumberInput
        value={value}
        defaultValue={minValue}
        minValue={minValue}
        maxValue={maxValue}
        disabled
      />
      <DualButton
        leftValue={<MinusIcon />}
        rightValue={<PlusIcon />}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
        disabledLeft={value === minValue}
        disabledRight={maxValue ? value >= maxValue : false}
      />
    </section>
  );
};

export default Counter;

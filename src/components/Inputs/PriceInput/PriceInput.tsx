import React from 'react';
import BaseInput from '@/components/Inputs/BaseInput';
import { GeneralProps } from '@/components/Inputs/types';

export interface PriceInputSpecificProps {
  currency: string;
}

type PriceInputProps = PriceInputSpecificProps & GeneralProps;

const PriceInput = ({
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
  currency,
}: PriceInputProps) => {
  const height = size === 'small' ? 'h-[30px]' : 'h-[42px]';
  const textSize = size === 'small' ? 'text-xs' : 'text-sm';
  const currencyColor = state === 'disabled' ? 'bg-dark-200' : 'bg-dark-100';

  return (
    <section className="relative flex items-center">
      <BaseInput
        type="text"
        size={size}
        placeholder={placeholder}
        state={state}
        value={value}
        onChange={onChange}
        rightPadding="pr-16"
      />
      <section
        className={`flex right-0 items-center justify-center absolute w-[52px] m-px rounded-r ${height} ${currencyColor}`}
      >
        <div className={`font-semibold text-dark-800 ${textSize} `}>
          {currency.toUpperCase()}
        </div>
      </section>
    </section>
  );
};

export default PriceInput;

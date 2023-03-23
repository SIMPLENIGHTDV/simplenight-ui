import React from 'react';
import BaseInput from '@/components/Inputs/BaseInput';
import { GeneralProps } from '@/components/Inputs/types';

export interface PriceInputSpecificProps {
  currency: string;
}

type PriceInputProps = PriceInputSpecificProps & GeneralProps;

const PriceInput = ({
  inputSize = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
  currency,
  ...rest
}: PriceInputProps) => {
  const height = inputSize === 'small' ? 'h-[30px]' : 'h-[42px]';
  const textSize = inputSize === 'small' ? 'text-xs' : 'text-sm';
  const currencyColor = state === 'disabled' ? 'bg-dark-200' : 'bg-dark-100';

  return (
    <section className="relative flex items-center">
      <BaseInput
        inputType="number"
        inputSize={inputSize}
        placeholder={placeholder}
        state={state}
        value={value}
        onChange={onChange}
        rightPadding="pr-16"
        {...rest}
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

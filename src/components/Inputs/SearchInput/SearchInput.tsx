import React from 'react';
import Search from '@/icons/regular/Search';
import Cross from '@/icons/regular/Cross';
import BaseInput from '@/components/Inputs/BaseInput';
import { ColorsMap, GeneralProps } from '@/components/Inputs/types';
import IconWrapper from '@/components/IconWrapper';

export interface SearchInputSpecificProps {
  onClear: () => void;
}

type SearchInputProps = SearchInputSpecificProps & GeneralProps;

const SearchInput = ({
  size = 'large',
  placeholder,
  state = 'idle',
  value,
  onChange,
  onClear,
}: SearchInputProps) => {
  const iconSize = size === 'large' ? 20 : 16;

  const hasValue = value !== '';
  const notDisabled = state !== 'disabled';
  const showClearButton = hasValue && notDisabled;

  const idleColor = value ? 'text-dark-1000' : 'text-dark-700';

  const colors: ColorsMap = {
    idle: `${idleColor}`,
    error: 'text-error-1000',
    success: 'text-green-1000',
    disabled: 'text-dark-700',
  };

  return (
    <section className="relative flex items-center">
      <div className="absolute left-3.5">
        <IconWrapper size={iconSize}>
          <Search className={`${colors[state]}`} />
        </IconWrapper>
      </div>
      <BaseInput
        type="text"
        size={size}
        placeholder={placeholder}
        state={state}
        value={value}
        onChange={onChange}
        rightPadding="pr-11"
        leftPadding="pl-11"
      />
      {showClearButton && (
        <button className="absolute right-3.5" onClick={onClear} type="button">
          <IconWrapper size={iconSize}>
            <Cross className="text-dark-700" />
          </IconWrapper>
        </button>
      )}
    </section>
  );
};

export default SearchInput;

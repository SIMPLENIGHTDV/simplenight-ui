import React from 'react';
import Search from '../../../icons/regular/Search';
import Cross from '../../../icons/regular/Cross';
import BaseInput from '../BaseInput';
import { ColorsMap, GeneralProps } from '../types';

interface SearchInputSpecificProps {
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
  const leftIconSize = size === 'large' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const rightIconSize = size === 'large' ? 'w-3 h-3' : 'w-2.5 h-2.5';

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
        <Search className={`${leftIconSize} ${colors[state]}`} />
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
          <Cross className={`${rightIconSize} text-dark-700`} />
        </button>
      )}
    </section>
  );
};

export default SearchInput;

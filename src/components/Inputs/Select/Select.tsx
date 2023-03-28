/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState, ForwardedRef, forwardRef } from 'react';
import { useOnOutsideClick } from '@/hooks';
import { ChevronDown, ChevronUp } from '@/icons/regular';

import {
  ColorsMap,
  SelectOption,
  SelectProps,
} from '@/components/Inputs/types';

export interface SelectSpecificProps extends SelectProps {
  leftPadding?: string;
  hideArrow?: boolean;
  options: SelectOption[];
  defaultValue?: SelectOption;
  searchable?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (option: SelectOption) => void;
}

const Select = forwardRef(
  (
    {
      searchable = false,
      options,
      defaultValue,
      inputSize = 'large',
      state = 'idle',
      placeholder = '',
      onChange,
      leftPadding = 'pl-0',
      hideArrow = false,
      ...rest
    }: SelectSpecificProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const [searchResults, setSearchResults] = useState(options);
    const isDisabled = state === 'disabled';

    const height = inputSize === 'small' ? 'h-8' : 'h-11';
    const textSize = inputSize === 'small' ? 'text-sm' : 'text-base';
    const iconSize = inputSize === 'large' ? 'w-5 h-5' : 'w-4 h-4';

    const idleBorderColor = selectedOption
      ? 'border-dark-400'
      : 'border-dark-300';
    const openBorderColor = 'border-primary-1000';
    const colors: ColorsMap = {
      idle: `text-dark-1000 ${open ? openBorderColor : idleBorderColor} `,
      error: `text-dark-1000   ${
        open ? openBorderColor : 'border-error-1000'
      } `,
      success: `text-dark-1000  ${
        open ? openBorderColor : 'border-green-1000'
      }`,
      disabled: 'text-dark-600 border-dark-300 bg-dark-200',
    };

    const searchInputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLInputElement>(null);
    useOnOutsideClick(selectRef, () => setOpen(false));

    const handleOpenClose = () => {
      const wasOpen = open;
      setOpen(!open);
      if (searchable && !wasOpen) searchInputRef?.current?.focus();
      if (searchable && wasOpen) searchInputRef?.current?.blur();
    };

    const handleChange = (option: SelectOption) => {
      setSelectedOption(option);
      setOpen(false);
      onChange(option);
    };

    const handleSearch = (e: any) => {
      setSelectedOption(e.target.value);
      setOpen(true);

      setSearchResults(
        options.filter((option: SelectOption) => {
          const matchValue = option.value
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          const matchLabel = option.label
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
          return matchValue || matchLabel;
        }),
      );
    };

    return (
      <section ref={selectRef}>
        <section
          className={`flex items-center  w-full border pl-3 pr-2  ${height}  ${
            colors[state]
          }
        ${open ? 'rounded-t' : 'rounded'}
        `}
          onClick={!isDisabled ? handleOpenClose : undefined}
        >
          <input
            type="text"
            className={` ${leftPadding} ${textSize} ${colors[state]} ${
              !searchable && 'cursor-pointer'
            } w-full h-full  border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent`}
            ref={ref}
            placeholder={placeholder}
            value={selectedOption?.label}
            onChange={handleSearch}
            readOnly={!searchable}
            {...rest}
          />
          {!hideArrow && (
            <button type="button">
              {open ? (
                <ChevronUp className={`${iconSize} text-dark-700`} />
              ) : (
                <ChevronDown className={`${iconSize} text-dark-700`} />
              )}
            </button>
          )}
        </section>
        <section
          className={`${!open ? 'hidden ' : ''} border ${
            colors[state]
          }  border-t-0 rounded-b `}
        >
          {searchResults.map((option: SelectOption) => (
            <div
              key={`${option.value}`}
              onClick={() => handleChange(option)}
              className="p-2 border-b border-solid cursor-pointer select-none border-dark-200 hover:bg-dark-100 last:border-b-0 "
            >
              {option.label}
            </div>
          ))}
        </section>
      </section>
    );
  },
);

Select.defaultProps = { leftPadding: 'pl-0', hideArrow: false };
export default Select;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import { useOnOutsideClick } from '../../../hooks';
import { ChevronDown, ChevronUp } from '../../../icons/regular';

import { GeneralProps } from '../types';
import { ColorsMap, SelectOption, SelectSpecificProps } from './SelectTypes';

type SelectProps = Omit<GeneralProps, 'state'> & SelectSpecificProps;

const Select = ({ searchable = true, options, defaultValue, size = 'large', state = 'idle', placeholder = '' }:SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(options);

  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';
  const iconSize = size === 'large' ? 'w-5 h-5' : 'w-4 h-4';

  const idleBorderColor = selectedOption ? 'border-dark-400' : 'border-dark-300';
  const openBorderColor = 'border-primary-1000';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${open ? openBorderColor : idleBorderColor} `,
    error:
      'text-dark-1000 border-error-1000 ',
    success:
      'text-dark-1000 border-green-1000',
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
  };

  const handleSearch = (e: any) => {
    setSelectedOption(e.target.value);
    setOpen(true);

    setSearchResults(
      options.filter((option: SelectOption) => {
        const matchValue = option.value
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
        return matchValue;
      }),
    );
  };

  return (
    <>

      <section
        className={`flex items-center  w-full border p-3 pr-2  ${height}  ${colors[state]} 
        ${open ? 'rounded-t' : 'rounded'}
        `}
        onClick={handleOpenClose}
        ref={selectRef}
      >
        <input
          type="text"
          className={`px-0 ${textSize} ${colors[state]} w-full h-full  border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent
         `}
          ref={searchInputRef}
          placeholder={placeholder}
          value={selectedOption?.label}
          onChange={handleSearch}
          disabled={!searchable}
        />
        <button type="button">
          {open
            ? <ChevronUp className={`${iconSize} text-dark-700`} />
            : <ChevronDown className={`${iconSize} text-dark-700`} />}
        </button>
      </section>
      <section className={`${!open ? 'hidden ' : ''} border border-primary-1000 border-t-0 rounded-b `}>
        {searchResults.map((option: SelectOption) => (
          <div
            key={`${option.value}`}
            onClick={() => handleChange(option)}
            className="cursor-pointer select-none p-2 border-solid border-b border-dark-200 hover:bg-dark-100 last:border-b-0 "
          >

            {option.label}

          </div>
        ))}
      </section>
    </>
  );
};

Select.defaultProps = { searchable: false, size: 'large' };
export default Select;

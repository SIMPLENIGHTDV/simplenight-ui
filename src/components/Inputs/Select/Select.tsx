import React, { useState } from 'react';

import { GeneralProps } from '../types';
import { ColorsMap, SelectSpecificProps } from './SelectTypes';

type SelectProps = Omit<GeneralProps, 'state'> & SelectSpecificProps;

const handleSearch = () => {
  console.log('hola');
};

const SelectInput = ({ size, value, state }:any) => {
  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';

  const idleBorderColor = value ? 'border-dark-400' : 'border-dark-300';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${idleBorderColor} `,
    error:
      'text-dark-1000 border-error-1000 ',
    success:
      'text-dark-1000 border-green-1000',
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
    open: 'text-dark-1000 border-primary-1000',

  };
  return (

    <section
      className={`flex items-center  rounded w-full border px-3 ${height}  ${colors[state]}`}
    >
      <input
        type="text"
        className={`px-0 ${textSize} ${colors[state]} w-full h-full  border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent`}
        placeholder="placeholder"
        value={value}
        onChange={handleSearch}
        /* disabled={!searchable} */
      />
      <button className="" type="button">
        a
        {' '}
        {/* <ChevronDownIcon className="text-dark-700" /> */}
      </button>
    </section>
  );
};

const Select = ({ searchable = false, options, selectedOption, size = 'large', value = '', state = 'idle' }:SelectProps) => (
  <div><SelectInput searchable={searchable} value={value} state={state} size={size} /></div>
);

Select.defaultProps = { searchable: false, size: 'large' };
export default Select;

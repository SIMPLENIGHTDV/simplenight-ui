/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { allCountries, iso2Lookup } from 'country-telephone-data';
import { ColorsMap, GeneralProps } from '../types';
import { ChevronDown, ChevronUp } from '../../../icons';
import { CountryCodeOption } from './PhoneNumberInputTypes';

  interface PhoneNumberInputSpecificProps {
    defaultPhoneNumber?: string;
    defaultCode?:string;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
  }

type PhoneNumberInputProps = GeneralProps & PhoneNumberInputSpecificProps
const PhoneNumberInput = ({
  size = 'large',
  state = 'idle',
  defaultCode = 'us',
  onChange,
  defaultPhoneNumber,
  placeholder,
}:PhoneNumberInputProps) => {
  const [open, setOpen] = useState(false);

  const height = size === 'small' ? 'h-8' : 'h-11';
  const textSize = size === 'small' ? 'text-sm' : 'text-base';
  const iconSize = size === 'large' ? 'w-6 h-6' : 'w-4 h-4';
  const isDisabled = state === 'disabled';

  const getDefaultCountryCode = (defaultIso2Code:string) => {
    const countryIndex = iso2Lookup[defaultIso2Code];
    return allCountries[countryIndex as unknown as number];
  };
  const [countryCode, setCountryCode] = useState<CountryCodeOption>(
    getDefaultCountryCode(defaultCode),
  );
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber || '');

  const idleBorderColor = countryCode && phoneNumber ? 'border-dark-400' : 'border-dark-300';
  const openBorderColor = 'border-primary-1000';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${open ? openBorderColor : idleBorderColor} `,
    error:
      `text-dark-1000   ${open ? openBorderColor : 'border-error-1000'} `,
    success:
      `text-dark-1000  ${open ? openBorderColor : 'border-green-1000'}`,
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
  };

  const handleChangeCode = (option:CountryCodeOption) => {
    const { dialCode } = option;
    setCountryCode(option);
    onChange(JSON.stringify({ phone_prefix: dialCode, phone_number: phoneNumber }));
    setOpen(false);
  };

  const handleChangePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhoneNumber(phone);
    onChange(JSON.stringify({ phone_prefix: countryCode.dialCode, phone_number: phone }));
  };
  return (
    <>
      <section
        className={`flex items-center  w-full border px-3 gap-2  ${height} ${colors[state]} 
      ${open ? 'rounded-t' : 'rounded'}
      `}
      >
        <section className="flex items-center" onClick={() => (!isDisabled ? setOpen(!open) : undefined)}>
          <input
            type="text"
            className={`px-0 ${textSize}  bg-transparent w-8 h-full  border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent`}
            value={countryCode?.iso2.toUpperCase()}
            disabled
          />
          <button type="button">
            {open
              ? <ChevronUp className={`${iconSize} text-dark-700`} />
              : <ChevronDown className={`${iconSize} text-dark-700`} />}
          </button>
          <span className={textSize}>
            +
            {countryCode?.dialCode}
          </span>
        </section>
        <input
          type="text"
          className={`px-0 ${textSize} ${colors[state]} w-full h-full bg-transparent border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent
        `}
          placeholder={placeholder}
          onChange={handleChangePhone}
          disabled={isDisabled}
        />

      </section>
      <section className={`${!open ? 'hidden ' : ''} border border-primary-1000 border-t-0 rounded-b max-h-[286px] overflow-auto`}>
        {allCountries.map((option: CountryCodeOption) => (
          <div
            key={`${option.dialCode}-${option.iso2}`}
            onClick={() => handleChangeCode(option)}
            className="cursor-pointer select-none p-2 border-solid border-b border-dark-200 hover:bg-dark-100 last:border-b-0 "
          >

            {option.iso2.toUpperCase()}

          </div>
        ))}
      </section>
    </>
  );
};

PhoneNumberInput.defaultProps = {
  defaultPhoneNumber: '',
  defaultCode: 'us',
};
export default PhoneNumberInput;

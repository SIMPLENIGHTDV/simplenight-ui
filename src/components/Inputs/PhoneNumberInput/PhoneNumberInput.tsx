/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';

import { allCountries, iso2Lookup } from 'country-telephone-data';
import InputMask from 'react-input-mask';
import { ColorsMap, GeneralProps } from '@/components/Inputs/types';
import { ChevronDown, ChevronUp } from '@/icons';
import { CountryCodeOption } from './PhoneNumberInputTypes';
import {
  formatDialCode,
  getPhoneNumberMask,
  removeFormatFromPhoneNumber,
} from './helpers';
import { useOnOutsideClick } from '@/hooks';
import IconWrapper from '@/components/IconWrapper';

export interface PhoneNumberInputSpecificProps {
  defaultPhoneNumber?: string;
  defaultCode?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

type PhoneNumberInputProps = Omit<GeneralProps, 'value'> &
  PhoneNumberInputSpecificProps;
const PhoneNumberInput = ({
  name,
  inputSize = 'large',
  state = 'idle',
  defaultCode = 'us',
  onChange,
  required = false,
  defaultPhoneNumber,
  placeholder,
}: PhoneNumberInputProps) => {
  const [open, setOpen] = useState(false);
  const [phoneInputIsFocused, setPhoneInputIsFocused] = useState(false);

  const height = inputSize === 'small' ? 'h-8' : 'h-11';
  const textSize = inputSize === 'small' ? 'text-sm' : 'text-base';
  const iconSize = inputSize === 'large' ? 20 : 16;
  const isDisabled = state === 'disabled';
  const isFocused = open || phoneInputIsFocused;

  const inputRef = useRef<HTMLInputElement>(null);
  useOnOutsideClick(inputRef, () => setOpen(false));

  const getDefaultCountryCode = (defaultIso2Code: string) => {
    const countryIndex = iso2Lookup[defaultIso2Code];
    return allCountries[countryIndex as unknown as number];
  };
  const [countryCode, setCountryCode] = useState<CountryCodeOption>(
    getDefaultCountryCode(defaultCode),
  );
  const [formattedDialCode, setFormattedDialCode] = useState<string>(
    countryCode.format ? formatDialCode(countryCode) : countryCode.dialCode,
  );
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber || '');
  const [phoneNumberMask, setPhoneNumberMask] = useState<string>(
    countryCode.format ? getPhoneNumberMask(countryCode) : '',
  );

  const idleBorderColor =
    countryCode && phoneNumber ? 'border-dark-400' : 'border-dark-300';
  const focusBorderColor = 'border-primary-1000';
  const colors: ColorsMap = {
    idle: `text-dark-1000 ${isFocused ? focusBorderColor : idleBorderColor} `,
    error: `text-dark-1000   ${
      isFocused ? focusBorderColor : 'border-error-1000'
    } `,
    success: `text-dark-1000  ${
      isFocused ? focusBorderColor : 'border-green-1000'
    }`,
    disabled: 'text-dark-600 border-dark-300 bg-dark-200',
  };

  const updatePhoneMasks = (option: CountryCodeOption) => {
    setFormattedDialCode(formatDialCode(option));
    setPhoneNumberMask(getPhoneNumberMask(option));
  };

  const handleChangeCode = (option: CountryCodeOption) => {
    const { dialCode } = option;
    setCountryCode(option);
    onChange(
      JSON.stringify({
        phone_prefix: dialCode,
        phone_number: removeFormatFromPhoneNumber(phoneNumber),
      }),
    );
    setOpen(false);
    updatePhoneMasks(option);
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setPhoneNumber(phone);
    onChange(
      JSON.stringify({
        phone_prefix: countryCode.dialCode,
        phone_number: removeFormatFromPhoneNumber(phone),
      }),
    );
  };
  return (
    <section ref={inputRef} className="relative">
      <section
        className={`flex items-center  w-full border px-3
        ${height} ${colors[state]} ${open ? 'rounded-t' : 'rounded'}`}
      >
        <section
          className="flex items-center "
          onClick={() => (!isDisabled ? setOpen(!open) : undefined)}
        >
          <input
            type="text"
            className={`px-0 ${textSize}  bg-transparent w-8 h-full  border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent`}
            value={countryCode?.iso2.toUpperCase()}
            disabled
          />
          <button type="button">
            <IconWrapper size={iconSize}>
              {open ? (
                <ChevronUp className="text-dark-700" />
              ) : (
                <ChevronDown className="text-dark-700" />
              )}
            </IconWrapper>
          </button>
          <span className={textSize}>
            {countryCode?.dialCode && formattedDialCode}
          </span>
        </section>
        <InputMask
          mask={phoneNumberMask || ''}
          onChange={handleChangePhone}
          onFocus={() => setPhoneInputIsFocused(true)}
          onBlur={() => setPhoneInputIsFocused(false)}
          value={phoneNumber}
          disabled={isDisabled}
          maskChar={null}
          placeholder={placeholder}
          className={`px-0 pl-2 ${textSize} ${colors[state]} w-full h-full bg-transparent border-none focus:shadow-none focus:inset-0 focus:ring-0 focus:outline-none focus:border-transparent`}
          name={name}
          id={name}
          required={required}
        />
      </section>
      <section
        className={`${
          !open ? 'hidden ' : ''
        } border border-primary-1000 border-t-0 rounded-b z-10 max-h-[286px] overflow-auto absolute w-full bg-white`}
      >
        {allCountries.map((option: CountryCodeOption) => (
          <div
            key={`${option.dialCode}-${option.iso2}`}
            onClick={() => handleChangeCode(option)}
            className="p-2 text-base border-b border-solid cursor-pointer select-none border-dark-200 hover:bg-dark-100 last:border-b-0"
          >
            {option.iso2.toUpperCase()}
          </div>
        ))}
      </section>
    </section>
  );
};

PhoneNumberInput.defaultProps = {
  defaultPhoneNumber: '',
  defaultCode: 'us',
};
export default PhoneNumberInput;

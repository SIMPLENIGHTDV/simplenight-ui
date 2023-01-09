import { CountryCodeOption } from './PhoneNumberInputTypes';

export const getPhoneNumberMask = (countryCode:CountryCodeOption) => {
  const { format } = countryCode;
  if (!format) return '9999999999999999999999';
  const formattedDialCodeLength = formatDialCode(countryCode).length;

  let phoneNumberMask = format.substring(formattedDialCodeLength);
  phoneNumberMask = phoneNumberMask.replace(/\./g, '9');
  return phoneNumberMask;
};

export const formatDialCode = (countryCode:CountryCodeOption) => {
  const { format, dialCode } = countryCode;
  if (!format) return dialCode;
  let formattedDialCode = format;
  for (let i = 0; i < dialCode.length; i += 1) {
    formattedDialCode = formattedDialCode.replace('.', dialCode[i]);
  }
  const lastDigitOfDialCode = dialCode[dialCode.length - 1];
  const indexOfLastDigitOfDialCode = formattedDialCode.lastIndexOf(lastDigitOfDialCode);
  const followingCharacterToDialCode = formattedDialCode[indexOfLastDigitOfDialCode + 1];
  let indexEnd;
  if (followingCharacterToDialCode === ')') {
    indexEnd = indexOfLastDigitOfDialCode + 2;
  } else {
    indexEnd = indexOfLastDigitOfDialCode + 1;
  }
  formattedDialCode = formattedDialCode.substring(0, indexEnd);
  return formattedDialCode;
};

export const removeFormatFromPhoneNumber = (phoneNumber:string) => phoneNumber.replace(/\D/g, '');

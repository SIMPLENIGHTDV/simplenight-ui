/* eslint-disable react/require-default-props */
import React from 'react';
import { Paragraph } from '@/components';

interface Props {
  color: string;
  name: string;
  hex: string;
  rgb: string;
  textWhite?: boolean;
}

const ColorBox = ({ color, name, hex, rgb, textWhite = true }: Props) => {
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <button
      type="button"
      onClick={() => {
        copyToClipboard(color);
      }}
      className={`${color} rounded-8 px-8 py-2 flex justify-between items-center gap-9 my-5 w-full max-w-lg`}
    >
      <Paragraph
        textColor={textWhite ? 'text-white' : 'text-dark-1000'}
        size="medium"
        fontWeight="semibold"
      >
        {name}
      </Paragraph>
      <Paragraph
        textColor={textWhite ? 'text-white' : 'text-dark-1000'}
        size="medium"
        fontWeight="semibold"
      >
        {hex}
      </Paragraph>
      <Paragraph
        textColor={textWhite ? 'text-white' : 'text-dark-1000'}
        size="medium"
        fontWeight="semibold"
      >
        {rgb}
      </Paragraph>
    </button>
  );
};

export default ColorBox;

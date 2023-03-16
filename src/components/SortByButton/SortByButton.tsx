import React from 'react';
import { ChevronDown } from '@/icons';
import IconWrapper from '../IconWrapper';

export interface ISortByButton {
  label: string;
}
const SortByButton = ({ label }: ISortByButton) => {
  return (
    <div>
      <IconWrapper size={16}>
        <ChevronDown className="text-primary-1000" />
      </IconWrapper>
      {label}
      <IconWrapper size={16}>
        <ChevronDown />
      </IconWrapper>
    </div>
  );
};

export default SortByButton;

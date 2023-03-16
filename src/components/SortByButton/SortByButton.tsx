import React from 'react';
import { ChevronDown, ChevronUp, SortBy } from '@/icons';
import IconWrapper from '../IconWrapper';
import { Paragraph } from '@/index';

export interface ISortByButton {
  label?: string;
  isOpen: boolean;
  onClick: () => void;
}
const SortByButton = ({ label = 'Sort', isOpen, onClick }: ISortByButton) => {
  return (
    <button
      type="button"
      className="flex gap-1 py-1 items-center"
      onClick={onClick}
    >
      <IconWrapper size={16}>
        <SortBy className="text-primary-1000" />
      </IconWrapper>
      <Paragraph className="capitalize">{label}</Paragraph>
      <IconWrapper size={16}>
        {isOpen ? (
          <ChevronUp className="text-dark-700" />
        ) : (
          <ChevronDown className="text-dark-700" />
        )}
      </IconWrapper>
    </button>
  );
};

SortByButton.defaultProps = {
  label: 'Sort',
};
export default SortByButton;

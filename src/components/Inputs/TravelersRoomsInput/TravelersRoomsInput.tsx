import React from 'react';
import { ColorsMap } from '../types';
import BaseButtonInput from '../BaseButtonInput';
import { Bed, MultiplePersons } from '../../../icons';
import { TravelersRoomsInputProps } from './TravelerRoomsInputTypes';

const TravelersRoomsInput = ({
  size = 'large',
  placeholder = { travelers: 'Travelers', rooms: 'Rooms' },
  state = 'idle',
  value = { travelers: '', rooms: '' },
  onClick,
  isOpen = false,
}: TravelersRoomsInputProps) => {
  const hasValue = value.travelers !== '' && value.rooms !== '';

  const textSize = size === 'small' ? 'text-xs' : 'text-sm';
  const textColor = state === 'disabled' ? 'text-dark-600' : 'text-dark-1000';

  const iconSize = size === 'large' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const idleColor = isOpen ? 'text-dark-1000' : 'text-dark-700';
  const colors: ColorsMap = {
    idle: `${idleColor}`,
    error: 'text-error-1000',
    success: 'text-green-1000',
    disabled: 'text-dark-700',
  };

  return (
    <BaseButtonInput
      size={size}
      state={state}
      isOpen={isOpen}
      hasValue={hasValue}
      onClick={onClick}
    >
      <section className={`flex items-center gap-2 ${textSize}`}>
        <div className="w-full flex gap-2 items-center">
          <MultiplePersons className={`${iconSize} ${colors[state]}`} />
          {!hasValue && <div className="text-dark-600">{placeholder.travelers}</div>}
          <div className={`${textColor}`}>{value.travelers}</div>
        </div>
        <div className="w-full flex gap-2 items-center">
          <Bed className={`${iconSize} ${colors[state]}`} />
          {!hasValue && <div className="text-dark-600">{placeholder.rooms}</div>}
          <div className={`${textColor}`}>{value.rooms}</div>

        </div>

      </section>
    </BaseButtonInput>
  );
};

TravelersRoomsInput.defaultProps = {
  placeholder: { travelers: 'Travelers', rooms: 'Rooms' },
};

export default TravelersRoomsInput;

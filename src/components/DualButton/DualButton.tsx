/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react';
import classnames from 'classnames';
import useColorButton from '../../hooks';

interface ButtonProps {
  rightValue: ReactElement;
  leftValue: ReactElement;
  disabledLeft?: boolean;
  disabledRight?: boolean;
  onRightClick: () => void;
  onLeftClick: () => void;
}

const DualButton = ({
  rightValue,
  leftValue,
  disabledLeft = false,
  disabledRight = false,
  onRightClick,
  onLeftClick,
}: ButtonProps) => {
  const colors = useColorButton('primary');

  return (
    <section className="flex flex-row">
      <button
        type="button"
        className={classnames(
          'px-4 pb-1 pt-1 font-semibold flex items-center justify-center rounded-l-4 w-11 h-11',
          {
            'cursor-pointer bg-primary-800 text-white': !disabledLeft,
            [`${colors.disabled} cursor-default`]: disabledLeft,
          },
        )}
        onClick={onLeftClick}
        disabled={disabledLeft}
      >
        {leftValue}
      </button>
      <button
        type="button"
        className={classnames(
          'px-4 pb-1 pt-1 font-semibold flex items-center justify-center rounded-r-4 w-11 h-11',
          {
            'cursor-pointer bg-primary-1000 text-white': !disabledRight,
            [`${colors.disabled} cursor-default`]: disabledRight,
          },
        )}
        onClick={onRightClick}
        disabled={disabledRight}
      >
        {rightValue}
      </button>
    </section>
  );
};

export default DualButton;

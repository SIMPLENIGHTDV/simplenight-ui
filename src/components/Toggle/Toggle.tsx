/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

interface ToggleProps {
  id: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  size: 'small' | 'large';
  children?: React.ReactNode;
}

const Toggle = ({
  id,
  checked,
  onChange,
  size = 'large',
  children,
}: ToggleProps) => {
  const isSmall = size === 'small';
  const sizeClass = isSmall
    ? 'h-[13.33px] w-6 py-[0.1rem] px-[0.2rem]'
    : 'h-5 w-9 p-[0.2rem]';
  const dotSize = isSmall ? 'h-2 w-2' : 'h-3 w-3';
  const dotTranslate = isSmall ? 'translate-x-2' : 'translate-x-4';
  const textSize = isSmall ? 'text-xs mt-[1px]' : 'text-sm';
  return (
    <label htmlFor={id} className="flex items-center gap-3 cursor-pointer">
      <section className="relative">
        <Switch
          id={id}
          checked={checked}
          onChange={() => onChange(!checked)}
          className={classNames(
            `${sizeClass} relative inline-flex flex-shrink-0 border border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`,
            {
              'bg-primary-1000': checked,
              'border border-dark-300': !checked,
            },
          )}
        >
          <span className="sr-only" />
          <span
            aria-hidden="true"
            className={classNames(
              `${dotSize} pointer-events-none inline-block rounded-full transform ring-0 transition ease-in-out duration-20`,
              {
                [`${dotTranslate} bg-white`]: checked,
                'translate-x-0 bg-dark-800': !checked,
              },
            )}
          />
        </Switch>
      </section>
      <span className={`${textSize} text-dark-1000`}>{children}</span>
    </label>
  );
};

export default Toggle;

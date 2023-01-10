/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import QuestionCircle from '../../icons/regular/QuestionCircle';
import Tooltip from '../Tooltip/Tooltip';
import Label from '../Label/Label';

const FormField = ({ label, required, info, error, counterValue, counterMax, children }: any) => {
  const Required = () => required && <span className="text-primary-1000">Required</span>;
  const Error = () => error && <span className="text-sm text-error-1000">{error}</span>;
  const Counter = () => (counterValue || (counterValue && counterMax)) && (
    <span className="text-sm text-dark-800">
      {counterValue}
      {counterMax && '/'}
      {counterMax}
    </span>
  );
  return (
    <section>
      <section className="flex justify-between mb-1">
        <section className="flex items-center gap-1">
          {label && <Label>{label}</Label>}
          {info && (
            <Tooltip text="Sec Info">
              <QuestionCircle className="text-dark-700 w-3.5" />
            </Tooltip>
          )}
        </section>
        <Required />
      </section>
      {children}
      <section className="flex justify-between mt-1">
        <Error />
        <Counter />
      </section>
    </section>
  );
};

export default FormField;

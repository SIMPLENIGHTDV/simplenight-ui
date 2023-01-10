/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import QuestionCircle from '../../icons/regular/QuestionCircle';
import Tooltip from '../Tooltip/Tooltip';
import Label from '../Label/Label';

interface RequiredProp {
  required: boolean;
  label: string;
}
interface FormFieldProps {
  label?: string;
  required?: RequiredProp;
  info?: string;
  error?: string;
  counterValue?: number;
  counterMax?: number;
  children: React.ReactNode;
}

const FormField = ({
  label,
  required,
  info,
  error,
  counterValue,
  counterMax,
  children,
}: FormFieldProps) => {
  const Required = () => (required?.required ? <span className="text-primary-1000">{required.label}</span> : null);
  const Error = () => (error ? <span className="text-sm text-error-1000">{error}</span> : null);
  const Counter = () => ((counterValue || (counterValue && counterMax)) ? (
    <span className="text-sm text-dark-800">
      {counterValue}
      {counterMax && '/'}
      {counterMax}
    </span>
  ) : null);
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

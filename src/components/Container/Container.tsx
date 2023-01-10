/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { ReactNode } from 'react';

interface IContainer {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Container = ({ children, className }: IContainer) => (
  <section className={`px-5 py-6 lg:px-20 lg:py-12 ${className}`}>
    {children}
  </section>
);

export default Container;

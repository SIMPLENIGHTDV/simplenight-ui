import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip = ({ text, children }: TooltipProps) => (
  <span className="group relative">
    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark-800 px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-dark-800 before:content-[''] group-hover:opacity-100">
      {text}
    </span>
    {children}
  </span>
);

export default Tooltip;

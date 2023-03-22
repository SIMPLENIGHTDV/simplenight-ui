import React from 'react';

interface TwoColsProps {
  children: React.ReactNode;
}

const TwoColumns = ({ children }: TwoColsProps) => {
  return (
    <div
      className="relative grid grid-cols-2 gap-4 p-10 border-l-8 border-gray-600 rounded-8"
      style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.16)' }}
    >
      {children}
    </div>
  );
};

export default TwoColumns;

/* eslint-disable react/require-default-props */
import React, { createRef, useEffect, useState } from 'react';

export interface LoaderProps {
  circleColor?: string;
  spinnerColor?: string;
}

const Loader = ({
  circleColor = 'text-primary-200',
  spinnerColor = 'text-primary-1000',
}: LoaderProps) => {
  const [height, setHeight] = useState(0);

  const sectionRef = createRef<HTMLDivElement>();
  useEffect(() => {
    setHeight(window.innerHeight - (sectionRef.current?.offsetTop ?? 0));
  }, []);

  return (
    <div
      className="relative flex items-center justify-center w-full h-full mx-auto bg-white"
      style={{
        height,
      }}
      ref={sectionRef}
    >
      <svg
        className={circleColor}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" />
      </svg>
      <svg
        className={`absolute animate-spin ${spinnerColor}`}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 4C50.3516 4 59.6827 8.36906 66.25 15.3637"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loader;

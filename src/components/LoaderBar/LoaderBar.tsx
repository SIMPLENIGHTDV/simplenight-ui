/* eslint-disable react/require-default-props */
import React from 'react';
import { ILoaderBar } from './LoaderBarTypes';

const LoaderBar = ({ loaded = false }: ILoaderBar) => {
  return (
    <div className="w-full h-1 bg-white">
      <div
        className={`bg-primary-1000 h-full ${
          loaded ? 'w-full animate-loaded' : 'animate-loading'
        }`}
      />
    </div>
  );
};

export default LoaderBar;

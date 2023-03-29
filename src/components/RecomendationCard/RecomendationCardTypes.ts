import React from 'react';

export interface IRecomendationCard extends React.PropsWithChildren<{}> {
  src?: string;
  title: string;
  price: string;
  onClick?: () => void;
}

export interface IRecomendationCardFooter {
  title: string;
  price: string;
}

export interface IRecomendationCardImage {
  src?: string;
}

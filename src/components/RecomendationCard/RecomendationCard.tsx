import React from 'react';

import { Paragraph } from '@/index';
import { IRecomendationCard, IRecomendationCardFooter, IRecomendationCardImage } from './RecomendationCardTypes';
import ImageEmpty from '@/images/ImageEmpty';

const RecomendationCard = ({ src, title, price, onClick }: IRecomendationCard) => {

  return (
    <button
      className={`outline-0 focus:sm:border-[4px] focus:border-primary-700 active:sm:border-[4px] 
        active:border-primary-700 hover:sm:border-[4px] hover:border-primary-700 
        rounded-[4px] border-solid sm:border-[1px] border-dark-300 max-w-[153px] 
        sm:max-w-[392px] flex flex-col items-start`}
      onClick={onClick}
      type='button'
    >
      <RecomendationCard.Image src={src}/>
      <RecomendationCard.Footer title={title} price={price}/>
    </button>
  );
};

RecomendationCard.Footer = ({ title, price }: IRecomendationCardFooter) => {
  return (
    <div className="rounded-[4px] pt-2 sm:pr-5 sm:pl-5 sm:p-4 sm:bg-white flex flex-col sm:flex-row w-[100%] justify-between">
      <Paragraph className='whitespace-nowrap pb-1 sm:pb-0'  size="medium" fontWeight="semibold">
        {title}
      </Paragraph>
      <Paragraph size="medium">
        {price}
      </Paragraph>
    </div>
  );
};

RecomendationCard.Image = ({ src }: IRecomendationCardImage) => {
  if (src) {
    return (
      <img
        src={src}
        className="object-fill max-h-[135px] w-[153px] sm:w-[392px]"
      />
    )
  }
  return (
    <div className="pt-2 object-fill h-[135px] max-h-[135px] w-[153px] sm:w-[392px]">
      <ImageEmpty 
        variant='primary'
        preserveAspectRatio="xMidYMid meet"
        width= 'inherit'
        height= 'inherit'
      />
    </div>
  )
};

export default RecomendationCard;

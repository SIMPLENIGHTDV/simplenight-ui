import React from 'react';

import { Paragraph } from '@/index';
import { IRecomendationCard, IRecomendationCardFooter, IRecomendationCardImage } from './RecomendationCardTypes';
import ImageEmpty from '@/images/ImageEmpty';

const RecomendationCard = ({ src, title, price }: IRecomendationCard) => {

  return (
    <div
      className={`rounded-[4px] border-solid sm:border-[1px] border-dark-300 max-w-[153px] sm:max-w-[392px] flex flex-col items-start`}
    >
      <RecomendationCard.Image src={src}/>
      <RecomendationCard.Footer title={title} price={price}/>
    </div>
  );
};

RecomendationCard.Footer = ({ title, price }: IRecomendationCardFooter) => {
  return (
    <div className="rounded-[4px] pt-2 sm:pr-5 sm:pl-5 sm:p-4 sm:bg-white flex flex-col sm:flex-row w-[153px] sm:w-[390px] justify-between">
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

  return (!!src) ?
    (<img
      src={src}
      className="object-fill max-h-[135px] w-[153px] sm:w-[392px]"
    />) :
    (
      <div
        className="object-fill h-[135px] max-h-[135px] w-[153px] sm:w-[392px]"
      >
        <ImageEmpty 
          variant='primary'
          props={{
            preserveAspectRatio:"xMidYMid meet",
            width: 'inherit',
            height: 'inherit'
          }}
        />
      </div>
    )
};

export default RecomendationCard;

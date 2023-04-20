import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { recommendedProducts } from '../../data/Recommended';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {
        recommendedProducts.map(product => <CardRecomendacion key={product.id} {...product} />)
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;

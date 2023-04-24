import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { CardsContainer } from './CardsRecomendacionStyled';
import { useSelector } from 'react-redux';

const CardsRecomendacion = () => {
  const recommendedProducts = useSelector(
    state => state.recommended.recommended
  );
  return (
    <CardsContainer gridLength={4}>
      {recommendedProducts.map(product => (
        <CardRecomendacion key={product.id} {...product} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;

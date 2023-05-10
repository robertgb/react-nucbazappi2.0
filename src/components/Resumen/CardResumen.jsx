import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './CardResumenStyles';

const CardResumen = ({ img, title, desc, quantity, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={img}
          alt={title}
        />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;

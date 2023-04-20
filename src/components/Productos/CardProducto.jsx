import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';

const CardProducto = (props) => {
  return (
    <ProductosCard>
      <img
        src={props.img}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(props.price)}</CardPrice>
        <Button onClick={e => e.preventDefault()}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;

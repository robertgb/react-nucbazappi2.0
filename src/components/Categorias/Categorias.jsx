import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
import { Categories } from '../../data/Categories';

const Categorias = () => {
  return (
    <CategoriasContainer>
      {
        Categories.map((category) => (
          <Categoria key={category.id} {...category}  />
        ))
      }      
    </CategoriasContainer>
  );
};

export default Categorias;

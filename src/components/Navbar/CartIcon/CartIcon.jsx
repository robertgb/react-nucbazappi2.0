import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../../redux/cart/cart-actions';
import * as userActions from '../../../redux/user/user-actions';

import { FaShoppingCart } from 'react-icons/fa';

import { LinkContainerStyled } from './../NavbarStyles';

const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const hiddenMenu = useSelector(state => state.user.hiddenMenu);

  const dispatch = useDispatch();

  return (
    <LinkContainerStyled
      onClick={() => {
        dispatch(cartActions.toggleHiddenCart());
        !hiddenMenu && dispatch(userActions.toggleMenuHidden());
      }}
    >
      <FaShoppingCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;

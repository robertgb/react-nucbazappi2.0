import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../../redux/user/user-actions';
import { AnimatePresence } from 'framer-motion';

import { auth } from '../../../firebase/firebase-utils';

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>{`Hola ${currentUser?.displayName}!!`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to='/mis-ordenes'>Mis Ordenes</LinkStyled>
          <span
            onClick={() =>
              auth
                .signOut()
                .then(() => dispatch(userActions.toggleMenuHidden()))
            }
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;

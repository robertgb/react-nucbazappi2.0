import React from 'react';
import { Formik } from 'formik';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
} from './RegisterStyles';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { registerInitialValues } from '../../formik/initialValues';
import { registerValidationSchema } from '../../formik/validationSchema';
import { createUser } from '../../axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';
import { useRedirect } from '../../hooks/useRedirect';

const Register = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(values.name, values.email, values.password)
          actions.resetForm()
          //actions.preventDefault()
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }))
          }
        }}
      >
        <Form>
          <LoginInput type='text' name='name' placeholder='Nombre' />
          <LoginInput type='text'  name='email' placeholder='Email' />
          <LoginInput type='password'  name='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={e => e.preventDefault()}
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit type='button'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;

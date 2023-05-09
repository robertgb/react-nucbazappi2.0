import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginPasswordStyled,
} from './LoginStyles';
import { useDispatch } from 'react-redux';
import { useRedirect } from '../../hooks/useRedirect';
import { loginInitialValues } from '../../formik/initialValues';
import { loginValidationSchema } from '../../formik/validationSchema';
import { loginUser } from '../../axios/axios.user';
import { setCurrentUser } from '../../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch()
  useRedirect('/')
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password)
          if (user) {
            dispatch(setCurrentUser({
              ...user.usuario,
              token: user.token
            }))
          }
        }}
      >
        <Form>
          <LoginInput type='text' name='email' placeholder='Email' />
          <LoginInput type='password' name='password' placeholder='Password' />
          <Link to='/forgot-password'>
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
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
          <Link to='/register'>
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit type='button'>
            Ingresar
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;

import React from 'react';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';
import { checkoutInitialValues } from '../../../formik/initialValues';
import { checkoutValidationSchema } from '../../../formik/validationSchema';

const CheckoutForm = ({ cartItems }) => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <Input
            htmlFor='nombre'
            name='name'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
            htmlFor='celular'
            type='text'
            name='cellphone'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
            htmlFor='localidad'
            type='text'
            name='location'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
            htmlFor='direccion'
            type='text'
            name='address'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
          <div>
            <Submit disabled={!cartItems.length}>Iniciar Pedido</Submit>
          </div>
        </Form>
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;

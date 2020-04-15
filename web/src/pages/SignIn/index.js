import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Content } from './styles';
import Input from '~/components/Form/Inputs/Input';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});

      reset();

      const { email, password } = data;
      dispatch(signInRequest(email, password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Content>
      <img src={logo} alt="FastFeet" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="SEU E-MAIL"
          placeholder="exemplo@email.com"
        />
        <Input
          name="password"
          type="password"
          label="SUA SENHA"
          placeholder="********"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </Content>
  );
}

import React, {useRef} from 'react';

import {Image} from 'react-native';

import logo from '~/assets/logo.png';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const deliverymanRef = useRef();

  function handleSubmit() {}

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu Id de cadastro"
          ref={deliverymanRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}

import React, {useState, useRef} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/logo.png';

import {signInRequest} from '~/store/modules/auth/actions';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const deliverymanRef = useRef();

  const [idDeliveryman, setIdDeliveryman] = useState('');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(idDeliveryman));
  }

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
          value={idDeliveryman}
          onChangeText={setIdDeliveryman}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}

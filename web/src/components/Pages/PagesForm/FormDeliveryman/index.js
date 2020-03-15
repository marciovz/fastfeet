import React from 'react';
import PropTypes from 'prop-types';

import Input from '~/components/Form/Inputs/Input';
import InputAvatar from '~/components/Form/Inputs/InputAvatar';

import { FormContainer } from './styles';

export default function FormDeliveryman({ onSubmit }) {
  return (
    <FormContainer id="formDeliveryman" onSubmit={onSubmit}>
      <InputAvatar name="avatar_id" />
      <Input
        name="name"
        type="text"
        label="Nome"
        placeholder="Insira o nome do entregador"
      />
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Insira o email do entregador"
      />
    </FormContainer>
  );
}

FormDeliveryman.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

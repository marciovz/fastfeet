import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from '~/components/Form/Inputs/Input';
import InputAvatar from '~/components/Form/Inputs/InputAvatar';

import { FormContainer } from './styles';

export default function FormDeliveryman({ onSubmit, dataDeliveryman }) {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (dataDeliveryman) {
      setInitialData({
        name: dataDeliveryman.name,
        email: dataDeliveryman.email,
        avatar: dataDeliveryman,
      });
    }
  }, [dataDeliveryman]);

  return (
    <FormContainer
      id="formDeliveryman"
      onSubmit={onSubmit}
      initialData={initialData}
    >
      <InputAvatar name="avatar_id"/>
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

FormDeliveryman.defaultProps = {
  dataDeliveryman: null,
};

FormDeliveryman.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataDeliveryman: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    Avatar: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: PropTypes.string,
    }),
  }),
};

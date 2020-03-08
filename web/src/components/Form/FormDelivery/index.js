import React from 'react';
import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Input from '~/components/Form/Inputs/Input';
import AsyncSelectInput from '~/components/Form/Selects/AsyncSelectInput';

import { Container, Line } from './styles';

export default function FormDelivery({ onSubmit }) {
  async function optionsRecipient(inputFilter) {
    try {
      return await api
        .get('recipients', { params: { q: inputFilter } })
        .then(response => response.data)
        .then(response =>
          response.map(recipient => ({
            value: recipient.id,
            label: recipient.name,
          }))
        );
    } catch (err) {
      toast.error('Erro ao buscar dados de encomendas no banco!');
      return null;
    }
  }

  async function optionsDeliveryman(inputFilter) {
    try {
      return await api
        .get('deliverymans', { params: { q: inputFilter } })
        .then(response => response.data)
        .then(response =>
          response.map(deliveryman => ({
            value: deliveryman.id,
            label: deliveryman.name,
          }))
        );
    } catch (err) {
      toast.error('Erro ao buscar os dados dos entregadores no bando!');
      return null;
    }
  }

  return (
    <Container>
      <Form id="formDelivery" onSubmit={onSubmit}>
        <Line>
          <AsyncSelectInput
            name="recipient"
            label="Destinatário"
            loadOptions={optionsRecipient}
            placeholder="Selecione um destinatário"
          />
          <AsyncSelectInput
            name="deliveryman"
            label="Entregador"
            loadOptions={optionsDeliveryman}
            placeholder="Selecione um entregador"
          />
        </Line>

        <Input
          name="product"
          type="text"
          label="Produto"
          placeholder="Nome do produto"
        />
      </Form>
    </Container>
  );
}

FormDelivery.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

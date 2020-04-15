import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Input from '~/components/Form/Inputs/Input';
import AsyncSelectInput from '~/components/Form/Selects/AsyncSelectInput';

import { Container, Line } from './styles';

export default function FormDelivery({ dataDelivery, onSubmit }) {
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (dataDelivery) {
      setInitialData({
        recipient: {
          value: dataDelivery.recipient.id,
          label: dataDelivery.recipient.name,
        },
        deliveryman: {
          value: dataDelivery.deliveryman.id,
          label: dataDelivery.deliveryman.name,
        },
        product: dataDelivery.product,
      });
    }
  }, [dataDelivery]);

  async function optionsRecipient(inputFilter) {
    try {
      return await api
        .get('recipients', { params: { q: inputFilter } })
        .then(response => response.data)
        .then(response =>
          response.map(recipientItem => ({
            value: recipientItem.id,
            label: recipientItem.name,
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
          response.map(deliverymanItem => ({
            value: deliverymanItem.id,
            label: deliverymanItem.name,
          }))
        );
    } catch (err) {
      toast.error('Erro ao buscar os dados dos entregadores no banco!');
      return null;
    }
  }

  return (
    <Container>
      <Form id="formDelivery" onSubmit={onSubmit} initialData={initialData}>
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
          defautl=""
        />
      </Form>
    </Container>
  );
}

FormDelivery.defaultProps = {
  dataDelivery: null,
};

FormDelivery.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dataDelivery: PropTypes.shape({
    recipient: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }).isRequired,
    deliveryman: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    }).isRequired,
    product: PropTypes.string.isRequired,
  }),
};

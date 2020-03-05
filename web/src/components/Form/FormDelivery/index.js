import React from 'react';
import { Form } from '@unform/web';

import { Container, Line } from './styles';

import Input from '~/components/Form/Inputs/Input';

export default function FormDelivery() {
  return (
    <Container>
      <Form>
        <Line>
          <Input
            name="recipient"
            type="text"
            label="Destinatário"
            placeholder="Nome do destinatário"
          />
          <Input
            name="deliveryman"
            type="text"
            label="Entregador"
            placeholder="Nome do entregador"
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

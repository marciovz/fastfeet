import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderPagesForm from '~/components/HeaderPagesdForm';
import ButtonSave from '~/components/Form/Buttons/Save';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import DashboardForm from '~/components/Form/DashboardForm';
import FormDelivery from '~/components/Form/FormDelivery';

import { Container } from './styles';

export default function New() {
  function handleGoBack() {
    history.push('/delivery');
  }

  async function handleSave({ recipient, deliveryman, product }) {
    try {
      await api.post('/deliveries', {
        recipient_id: recipient.value,
        deliveryman_id: deliveryman.value,
        product,
      });
      toast.success('Entrega cadastrada com sucesso!');
      history.push('/delivery');
    } catch (err) {
      console.tron.log(err);
      toast.error('Não foi possível cadastrar a entrega');
    }
  }

  return (
    <Container>
      <HeaderPagesForm title="Cadastro de encomendas">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDelivery" />
      </HeaderPagesForm>
      <DashboardForm>
        <FormDelivery onSubmit={handleSave} />
      </DashboardForm>
    </Container>
  );
}

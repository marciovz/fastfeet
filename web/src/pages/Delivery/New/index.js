import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/PagesForm/HeaderForm';
import ButtonSave from '~/components/Form/Buttons/Save';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ContentForm from '~/components/PagesForm/ContentForm';
import FormDelivery from '~/components/PagesForm/FormDelivery';

import { ContainerPagesForm } from '~/components/PagesForm/styles';

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
      toast.error('Não foi possível cadastrar a entrega');
    }
  }

  return (
    <ContainerPagesForm>
      <HeaderForm title="Cadastro de encomendas">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDelivery" />
      </HeaderForm>
      <ContentForm>
        <FormDelivery onSubmit={handleSave} />
      </ContentForm>
    </ContainerPagesForm>
  );
}

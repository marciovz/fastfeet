import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/PagesForm/HeaderForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import ContentForm from '~/components/PagesForm/ContentForm';
import FormDeliveryman from '~/components/PagesForm/FormDeliveryman';

import { ContainerPagesForm } from '~/components/PagesForm/styles';

export default function New() {
  function handleGoBack() {
    history.push('/deliveryman');
  }

  async function handleSave({ name, email, avatar_id }) {
    try {
      await api.post('deliverymans', { name, email, avatar_id });
      history.push('/deliveryman');
    } catch (err) {
      toast.error('Não foi possível cadastrar o entregador!');
    }
  }

  return (
    <ContainerPagesForm>
      <HeaderForm title="Cadastro de entregadores">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formDeliveryman" />
      </HeaderForm>
      <ContentForm>
        <FormDeliveryman onSubmit={handleSave} />
      </ContentForm>
    </ContainerPagesForm>
  );
}

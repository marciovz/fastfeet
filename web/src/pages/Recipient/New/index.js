import React from 'react';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/Pages/PagesForm/HeaderForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import ContentForm from '~/components/Pages/PagesForm/ContentForm';
import FormRecipient from '~/components/Pages/PagesForm/FormRecipient';

import { ContainerPagesForm } from '~/components/Pages/PagesForm/styles';

export default function New() {
  function handleGoBack() {
    history.push('/recipient');
  }

  async function handleSave(data) {
    console.tron.log(data);
    const { name, street, number, complement, city, state, zip_code } = data;
    try {
      await api.post('recipients', {
        name,
        street,
        number,
        complement,
        city,
        state: state.value,
        zip_code,
      });
      history.push('/recipient');
    } catch (err) {
      toast.error('Não foi possível cadastrar o destinatário!');
    }
  }

  return (
    <ContainerPagesForm>
      <HeaderForm title="Cadastro de destinatários">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formRecipient" />
      </HeaderForm>
      <ContentForm>
        <FormRecipient onSubmit={handleSave} />
      </ContentForm>
    </ContainerPagesForm>
  );
}

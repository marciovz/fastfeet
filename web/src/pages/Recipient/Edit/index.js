import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/PagesForm/HeaderForm';
import ButtonGoBack from '~/components/Form/Buttons/GoBack';
import ButtonSave from '~/components/Form/Buttons/Save';
import ContentForm from '~/components/PagesForm/ContentForm';
import FormRecipient from '~/components/PagesForm/FormRecipient';

import { ContainerPagesForm } from '~/components/PagesForm/styles';

export default function Edit() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    async function loadRecipients() {
      try {
        const { data } = await api.get(`/recipients/${id}`);
        setRecipient(data);
      } catch (err) {
        toast.error('Não foi possível editar o destinatário');
      }
    }
    loadRecipients();
  }, [id]);

  function handleGoBack() {
    history.push('/recipient');
  }

  async function handleSave({
    name,
    street,
    number,
    complement,
    city,
    state,
    zip_code,
  }) {
    try {
      await api.put(`/recipients/${id}`, {
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
      toast.error('Não foi possível editar o destinatário!');
    }
  }

  return (
    <ContainerPagesForm>
      <HeaderForm title="Edição de destinatário">
        <ButtonGoBack onClick={handleGoBack} />
        <ButtonSave type="submit" form="formRecipient" />
      </HeaderForm>
      <ContentForm>
        <FormRecipient onSubmit={handleSave} dataRecipient={recipient} />
      </ContentForm>
    </ContainerPagesForm>
  );
}
